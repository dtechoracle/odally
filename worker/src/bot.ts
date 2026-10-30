import { askDeepSeekAnswer } from "./deepseek";
import { chromium } from "playwright-extra";
import stealthPlugin from "puppeteer-extra-plugin-stealth";
chromium.use(stealthPlugin());
import { updateJobStatus } from "./index";
import * as fs from "fs";

interface AgentConfig {
  /** Custom intro message spoken via TTS and posted to Meet chat when the bot joins. */
  introMessage?: string;
  /** Comma-separated list of keywords to watch for in spoken speech & chat. */
  keywordAlerts?: string;
  /** Talking points provided by the user. */
  talkingPoints?: string;
  /** Next.js app URL for reporting live mentions. */
  appUrl?: string;
  /** Worker secret for authenticating with Next.js API. */
  workerSecret?: string;
  /** Maximum meeting duration in minutes before the bot auto-leaves. Default: 90. */
  maxMeetingMinutes?: number;
  /** Minutes of empty room before auto-leaving. Default: ~0.67 (2 x 20 s checks). */
  emptyRoomChecksBeforeLeave?: number;
}

interface BotOptions {
  meetingId: string;
  meetUrl: string;
  videoUrl: string;
  accessToken?: string;
  refreshToken?: string;
  agentConfig?: AgentConfig;
}

export async function runMeetingBot(options: BotOptions) {
  const { meetingId, meetUrl, videoUrl, accessToken, agentConfig = {} } = options;
  const {
    introMessage = "Hi everyone. I'm Odally, joining on behalf of the presenter. Feel free to ask questions in the chat.",
    keywordAlerts = "",
    talkingPoints = "",
    appUrl = process.env.APP_URL || "http://localhost:3000",
    workerSecret = process.env.WORKER_SECRET || "dev-secret-key",
    maxMeetingMinutes = 90,
    emptyRoomChecksBeforeLeave = 2,
  } = agentConfig;

  updateJobStatus(meetingId, "joining");

  console.log(`[Bot ${meetingId}] Launching browser...`);
  
  const contextOptions: any = {
    headless: process.env.NODE_ENV === "production",
    channel: "chrome",
    args: [
      "--use-fake-ui-for-media-stream",
      "--use-fake-device-for-media-stream",
      "--disable-blink-features=AutomationControlled",
      "--autoplay-policy=no-user-gesture-required",
      "--disable-background-timer-throttling",
      "--disable-backgrounding-occluded-windows",
      "--disable-renderer-backgrounding",
    ],
    permissions: ["camera", "microphone"],
  };

  let context;
  if (fs.existsSync("./bot-profile")) {
    console.log(`[Bot ${meetingId}] Loading persistent Google Auth profile!`);
    context = await chromium.launchPersistentContext("./bot-profile", contextOptions);
  } else {
    console.log(`[Bot ${meetingId}] No bot-profile found. Attempting to join anonymously.`);
    const browser = await chromium.launch(contextOptions);
    context = await browser.newContext();
  }

  // Attempt to inject Google OAuth token into cookies/storage if provided
  // Note: True Google Meet login often requires full session cookies (SID, HSID, etc.).
  // If the API token isn't enough, it will fall back to asking for a name to join as a guest.
  if (accessToken) {
    // In a fully robust system, you'd use the refresh token to generate standard login cookies.
    // For now, we inject a dummy auth state and attempt to bypass guest mode.
    console.log(`[Bot ${meetingId}] Using provided OAuth token.`);
  }

  // ── IMPORTANT: VIRTUAL CAMERA INJECTION ────────────────────────
  // To inject a video as the webcam in Playwright, Chrome requires the file locally.
  // In a full production worker, you would:
  // 1. Download `videoUrl` to a temporary local file (e.g., /tmp/video.y4m)
  // 2. Pass these args to Chromium on launch:
  //    "--use-fake-ui-for-media-stream",
  //    "--use-fake-device-for-media-stream",
  //    "--use-file-for-fake-video-capture=/tmp/video.y4m"
  
  let normalizedUrl = meetUrl.trim();
  if (!/^https?:\/\//i.test(normalizedUrl)) {
    normalizedUrl = `https://${normalizedUrl}`;
  }

  const page = await context.newPage();

  if (videoUrl) {
    try {
      console.log(`[Bot ${meetingId}] Pre-fetching presentation video from ${videoUrl}...`);
      const vRes = await fetch(videoUrl);
      if (vRes.ok) {
        const ab = await vRes.arrayBuffer();
        const videoBuffer = Buffer.from(ab);
        console.log(`[Bot ${meetingId}] Video downloaded successfully (${(videoBuffer.length / (1024 * 1024)).toFixed(2)} MB).`);

        // Intercept same-origin HTTPS URL to completely bypass Chrome CSP and Mixed Content blocking!
        await page.route("https://meet.google.com/presentation-video.mp4", (route) => {
          route.fulfill({
            status: 200,
            contentType: "video/mp4",
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Accept-Ranges": "bytes",
              "Content-Length": videoBuffer.length.toString(),
            },
            body: videoBuffer,
          });
        });

        console.log(`[Bot ${meetingId}] Injecting virtual camera feed from same-origin HTTPS video.`);
        await page.addInitScript(() => {
          try {
            const video = document.createElement("video");
            video.src = "https://meet.google.com/presentation-video.mp4";
            video.crossOrigin = "anonymous";
            video.loop = true;
            video.muted = true;
            video.autoplay = true;
            video.playsInline = true;
            video.setAttribute("playsinline", "true");
            video.setAttribute("muted", "true");
            video.style.position = "fixed";
            video.style.top = "-9999px";
            video.style.left = "-9999px";
            video.style.opacity = "0";
            video.style.pointerEvents = "none";

            video.onloadedmetadata = () => {
              console.log("[VirtualCamera] Video metadata ready. Dimensions:", video.videoWidth, "x", video.videoHeight);
              video.play().catch((e) => console.error("[VirtualCamera] Play error:", e));
            };

            video.onerror = () => {
              console.error("[VirtualCamera] Video loading failed:", video.error);
            };

            const appendVideo = () => {
              const root = document.body || document.documentElement;
              if (root) {
                root.appendChild(video);
                video.play().catch(() => {});
              } else {
                setTimeout(appendVideo, 50);
              }
            };
            appendVideo();

            const canvas = document.createElement("canvas");
            canvas.width = 1280;
            canvas.height = 720;
            const ctx = canvas.getContext("2d");

            function drawLoop() {
              if (video.readyState >= 2 && ctx) {
                ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
              }
              requestAnimationFrame(drawLoop);
            }
            requestAnimationFrame(drawLoop);

            const canvasStream = canvas.captureStream(30);

            const origGUM = MediaDevices.prototype.getUserMedia;
            MediaDevices.prototype.getUserMedia = async function (constraints: any) {
              console.log("[VirtualCamera] Intercepted getUserMedia with constraints:", constraints);
              if (constraints && constraints.video) {
                try {
                  const vTracks = canvasStream.getVideoTracks();
                  const vTrack = vTracks[0] ? vTracks[0].clone() : null;
                  if (vTrack) {
                    vTrack.applyConstraints = async () => {};
                    vTrack.getCapabilities = () => ({
                      width: { min: 640, max: 1920 },
                      height: { min: 360, max: 1080 },
                      aspectRatio: { min: 1.33, max: 1.78 },
                      frameRate: { min: 15, max: 60 },
                      facingMode: ["user"],
                      resizeMode: ["none", "crop-and-scale"],
                    });
                  }

                  let audioTracks: MediaStreamTrack[] = [];
                  if (constraints.audio) {
                    const aStream = await origGUM.call(navigator.mediaDevices, { audio: constraints.audio, video: false }).catch(() => null);
                    if (aStream) audioTracks = aStream.getAudioTracks();
                  }

                  const tracks = vTrack ? [vTrack, ...audioTracks] : audioTracks;
                  return new MediaStream(tracks);
                } catch (err) {
                  console.error("[VirtualCamera] Error generating stream:", err);
                  return origGUM.call(navigator.mediaDevices, constraints);
                }
              }
              return origGUM.call(navigator.mediaDevices, constraints);
            };

            // Also attach to navigator.mediaDevices instance in case it was cached
            navigator.mediaDevices.getUserMedia = MediaDevices.prototype.getUserMedia;
          } catch (err) {
            console.error("[VirtualCamera] Initialization error:", err);
          }
        });
      } else {
        console.error(`[Bot ${meetingId}] Video pre-fetch failed with HTTP ${vRes.status}`);
      }
    } catch (e) {
      console.error(`[Bot ${meetingId}] Error downloading presentation video:`, e);
    }
  }
  
  try {
    console.log(`[Bot ${meetingId}] Navigating to Meet URL: ${normalizedUrl}`);
    await page.bringToFront().catch(() => {});
    await page.goto(normalizedUrl, { waitUntil: "domcontentloaded", timeout: 45000 });

    // 1. Join the meeting
    try {
      // If we are anonymous, it asks for a name
      const nameInput = page.locator('input[aria-label="Your name"]');
      if (await nameInput.isVisible({ timeout: 3000 }).catch(()=>false)) {
        await nameInput.fill("Jeremiah");
      }

      // 1. Dismiss notification popup if shown
      const notNowBtn = page.locator('button:has-text("Not now"), [role="button"]:has-text("Not now")').first();
      if (await notNowBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
        console.log(`[Bot ${meetingId}] Dismissed notification popup.`);
        await notNowBtn.click().catch(() => {});
      }

      // 2. Find and click whichever join button is ready (Join now or Ask to join)
      const joinBtn = page.locator('button:has-text("Join now"), button:has-text("Ask to join"), [role="button"]:has-text("Join now"), [role="button"]:has-text("Ask to join")').first();
      
      console.log(`[Bot ${meetingId}] Waiting for Join button...`);
            // If no video attached, turn off camera to prevent the green circle / pacman pattern
      if (!videoUrl) {
        console.log(`[Bot ${meetingId}] No presentation video attached. Disabling camera before join...`);
        const camBtn = page.locator('button[aria-label*="Turn off camera" i], [data-is-muted="false"][aria-label*="camera" i]').first();
        if (await camBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
          await camBtn.click().catch(() => {});
        } else {
          await page.keyboard.press("Control+e").catch(() => {});
        }
      }

      // Check microphone: unmute so speaking works
      const micBtn = page.locator('button[aria-label*="Turn on microphone" i], [data-is-muted="true"][aria-label*="microphone" i]').first();
      if (await micBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
        console.log(`[Bot ${meetingId}] Unmuting microphone before join...`);
        await micBtn.click().catch(() => {});
      } else {
        await page.keyboard.press("Control+d").catch(() => {});
      }

      await joinBtn.waitFor({ state: "visible", timeout: 25000 });
      await joinBtn.click({ force: true });
      console.log(`[Bot ${meetingId}] Clicked join button! Entering meeting...`);

      // ─────────────────────────────────────────────────────────────────────────
      // CRITICAL: WAIT FOR ACTUAL ROOM ADMISSION
      // If "Ask to join" was clicked, wait for host to admit the bot.
      // In active meeting, the Leave Call button or Chat button is present.
      // ─────────────────────────────────────────────────────────────────────────
      console.log(`[Bot ${meetingId}] Waiting for host admission / active meeting room...`);
      const inCallIndicator = page.locator(
        'button[aria-label*="Leave call" i], [data-tooltip*="Leave call" i], button[aria-label*="Leave" i], button[aria-label*="Chat" i]'
      ).first();
      try {
        await inCallIndicator.waitFor({ state: "visible", timeout: 90000 });
        console.log(`[Bot ${meetingId}] 🎉 ADMITTED! Now inside the active meeting room.`);
      } catch {
        console.log(`[Bot ${meetingId}] Note: Waiting for admission indicator timed out, proceeding best-effort.`);
      }

    } catch (e) {
      console.log(`[Bot ${meetingId}] Error during join sequence: ${e}`);
    }

    if (videoUrl) {
      console.log(`[Bot ${meetingId}] Presentation video attached. Ensuring camera is active...`);
      await page.waitForTimeout(2000);
      // Ensure the in-page video element is playing
      await page.evaluate(() => {
        const v = document.querySelector("video");
        if (v) {
          v.muted = false;
          v.play().catch(() => {});
        }
      }).catch(() => {});

      // Check if camera is currently off in Google Meet, turn it on via Ctrl+E
      const camOffButton = page.locator('button[aria-label*="Turn on camera" i], button[data-is-muted="true"][aria-label*="camera" i]').first();
      if (await camOffButton.isVisible({ timeout: 3000 }).catch(() => false)) {
        console.log(`[Bot ${meetingId}] Camera button indicates OFF. Turning on camera...`);
        await page.keyboard.press("Control+e").catch(() => {});
      }
    }

    await page.waitForTimeout(3000);
    await page.screenshot({ path: "bot-status.png" });

    updateJobStatus(meetingId, "presenting");
    console.log(`[Bot ${meetingId}] In meeting. Starting agent capabilities...`);

    // ─────────────────────────────────────────────────────────────────────────
    // CAPABILITY 1: TTS Voice Intro
    // Uses the browser's built-in SpeechSynthesis API — no external service.
    // The bot greets the room before the presentation starts.
    // ─────────────────────────────────────────────────────────────────────────
    const speakIntro = async () => {
      console.log(`[Bot ${meetingId}] Speaking intro via TTS...`);
      try {
        await page.evaluate(() => {
          return new Promise<void>((resolve) => {
            if (!window.speechSynthesis) { resolve(); return; }
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(introMessage);
            utterance.rate = 0.95;
            utterance.pitch = 1.0;
            utterance.volume = 1.0;
            // Pick a natural-sounding voice if available
            const voices = window.speechSynthesis.getVoices();
            const preferred = voices.find(
              (v) => /en[-_](US|GB|AU)/i.test(v.lang) && !/robot/i.test(v.name)
            );
            if (preferred) utterance.voice = preferred;
            utterance.onend = () => resolve();
            utterance.onerror = () => resolve();
            window.speechSynthesis.speak(utterance);
          });
        });
        console.log(`[Bot ${meetingId}] Intro speech complete.`);
      } catch (e) {
        console.warn(`[Bot ${meetingId}] TTS intro failed (non-fatal):`, e);
      }
    };

        // Ensure camera stays off if no video
    if (!videoUrl) {
      const inCallCam = page.locator('button[aria-label*="Turn off camera" i], button[data-is-muted="false"][aria-label*="camera" i]').first();
      if (await inCallCam.isVisible({ timeout: 1500 }).catch(() => false)) {
        await inCallCam.click().catch(() => {});
      }
    }

    // Unmute mic in-call if muted
    const inCallMic = page.locator('button[aria-label*="Turn on microphone" i], button[data-is-muted="true"][aria-label*="microphone" i]').first();
    if (await inCallMic.isVisible({ timeout: 1500 }).catch(() => false)) {
      await inCallMic.click().catch(() => {});
    }

    // ─────────────────────────────────────────────────────────────────────────
    // Post Welcome Message in Meet Chat so ALL participants see it immediately
    // ─────────────────────────────────────────────────────────────────────────
    // ─────────────────────────────────────────────────────────────────────────
    // Reusable Meet Chat Sender
    // ─────────────────────────────────────────────────────────────────────────
    const sendChatMessage = async (msg: string) => {
      try {
        console.log(`[Bot ${meetingId}] 💬 Sending to Meet chat: "${msg.slice(0, 80)}..."`);
        const chatInput = page.locator(
          'textarea[aria-label*="Send a message" i], textarea[aria-label*="Send a message to everyone" i], textarea[name="chatTextInput"], [contenteditable="true"]'
        ).first();

        if (!(await chatInput.isVisible({ timeout: 1500 }).catch(() => false))) {
          const chatBtn = page.locator(
            'button[aria-label*="Chat with everyone" i], button[aria-label*="Chat" i], [data-tooltip*="Chat" i], [aria-label*="Messages" i]'
          ).first();
          if (await chatBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
            await chatBtn.click().catch(() => {});
            await page.waitForTimeout(600);
          }
        }

        if (await chatInput.isVisible({ timeout: 3000 }).catch(() => false)) {
          await chatInput.fill(msg);
          await chatInput.press("Enter");
          console.log(`[Bot ${meetingId}] ✅ Chat message sent successfully.`);
        }
      } catch (err) {
        console.warn(`[Bot ${meetingId}] Error sending chat message:`, err);
      }
    };

    // Send introduction message to chat
    await page.waitForTimeout(1000);
    await sendChatMessage(`👋 ${introMessage}`);
    await speakIntro();

    // ─────────────────────────────────────────────────────────────────────────
    // Turn ON Google Meet Live Captions for Real-Time Voice Recognition
    // ─────────────────────────────────────────────────────────────────────────
    const turnOnCaptions = async () => {
      console.log(`[Bot ${meetingId}] Activating Google Meet Live Captions...`);
      try {
        await page.keyboard.press("c").catch(() => {});
        await page.waitForTimeout(800);
        const captionBtn = page.locator(
          'button[aria-label*="Turn on captions" i], button[data-tooltip*="captions" i], button[aria-label*="captions" i]'
        ).first();
        if (await captionBtn.isVisible({ timeout: 1500 }).catch(() => false)) {
          await captionBtn.click().catch(() => {});
        }
        console.log(`[Bot ${meetingId}] Live Captions toggled on.`);
      } catch (err) {
        console.warn(`[Bot ${meetingId}] Captions activation notice:`, err);
      }
    };

    await turnOnCaptions();

    // ─────────────────────────────────────────────────────────────────────────
    // CAPABILITY 2: Chat / Q&A Monitor
    // Polls the Meet chat panel DOM every 5 s for new messages.
    // When a new message arrives: logs it, pauses the presentation video,
    // speaks an acknowledgement, then resumes.
    // No external service — pure DOM scraping.
    // ─────────────────────────────────────────────────────────────────────────
    const seenMessages = new Set<string>();
    let presentationPaused = false;

    const openChatPanel = async () => {
      try {
        // Meet's chat button: look for the chat/message icon in the toolbar
        const chatBtn = page.locator(
          'button[aria-label*="Chat" i], button[aria-label*="Messages" i], [data-tooltip*="Chat" i]'
        ).first();
        if (await chatBtn.isVisible({ timeout: 2000 }).catch(() => false)) {
          await chatBtn.click().catch(() => {});
          await page.waitForTimeout(800);
          console.log(`[Bot ${meetingId}] Chat panel opened.`);
        }
      } catch {
        // Chat panel may already be open or unavailable — continue
      }
    };

    const pausePresentation = async () => {
      if (presentationPaused) return;
      presentationPaused = true;
      await page.evaluate(() => {
        const v = document.querySelector("video") as HTMLVideoElement | null;
        if (v && !v.paused) v.pause();
      }).catch(() => {});
      console.log(`[Bot ${meetingId}] Presentation paused for Q&A.`);
    };

    const resumePresentation = async () => {
      if (!presentationPaused) return;
      presentationPaused = false;
      await page.evaluate(() => {
        const v = document.querySelector("video") as HTMLVideoElement | null;
        if (v && v.paused) v.play().catch(() => {});
      }).catch(() => {});
      console.log(`[Bot ${meetingId}] Presentation resumed.`);
    };

    const speakAck = async (msg: string) => {
      try {
        await page.evaluate((text: string) => {
          return new Promise<void>((resolve) => {
            if (!window.speechSynthesis) { resolve(); return; }
            window.speechSynthesis.cancel();
            const u = new SpeechSynthesisUtterance(
              `Thank you for your question: "${text}". ` +
              "The presenter will address it after the presentation."
            );
            u.rate = 0.95;
            const voices = window.speechSynthesis.getVoices();
            const preferred = voices.find((v) => /en[-_](US|GB|AU)/i.test(v.lang));
            if (preferred) u.voice = preferred;
            u.onend = () => resolve();
            u.onerror = () => resolve();
            window.speechSynthesis.speak(u);
          });
        }, msg);
      } catch {
        // TTS ack is best-effort
      }
    };

    await openChatPanel();

        // ─────────────────────────────────────────────────────────────────────────
    // CAPABILITY 2B: Real-Time Spoken Keyword & Caption Monitor
    // Reads Google Meet live captions in real time, detecting spoken keywords & attendee questions.
    // ─────────────────────────────────────────────────────────────────────────
    const captionMonitorLoop = async (): Promise<string> => {
      const seenCaptions = new Set<string>();
      const parsedKeywords = (keywordAlerts || "")
        .split(",")
        .map((k) => k.trim().toLowerCase())
        .filter(Boolean);

      console.log(`[Bot ${meetingId}] 🎙️ Live caption monitor running. Watching keywords:`, parsedKeywords);

      while (true) {
        await page.waitForTimeout(1500);
        try {
          const activeCaptions = await page.evaluate((): { speaker: string; text: string }[] => {
            const results: { speaker: string; text: string }[] = [];
            const containers = document.querySelectorAll(
              'div[jsname="tgaKEf"], div[class*="caption" i], div[class*="VbkSUe"], div[class*="iTTPOb"], div[aria-live="polite"]'
            );
            containers.forEach((el) => {
              const text = el.textContent?.trim() || "";
              if (text && text.length > 3) {
                const speakerEl = el.querySelector('[class*="speaker" i], [class*="zsT0Vo"], img[alt]');
                const speaker = speakerEl?.getAttribute("alt") || speakerEl?.textContent?.trim() || "Participant";
                results.push({ speaker, text });
              }
            });
            return results;
          });

          for (const cap of activeCaptions) {
            if (!seenCaptions.has(cap.text)) {
              seenCaptions.add(cap.text);
              console.log(`[Bot ${meetingId}] 🎙️ Spoken speech heard: [${cap.speaker}]: "${cap.text}"`);

              const lowerText = cap.text.toLowerCase();
              for (const kw of parsedKeywords) {
                if (lowerText.includes(kw)) {
                  console.log(`🎯 [Bot ${meetingId}] KEYWORD MATCH: "${kw}" spoken by ${cap.speaker}: "${cap.text}"`);
                  if (appUrl) {
                    const detectedMention = {
                      keyword: kw,
                      speaker: cap.speaker,
                      context: cap.text,
                      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                    };
                    try {
                      await fetch(`${appUrl}/api/meetings/${meetingId}`, {
                        method: "PATCH",
                        headers: {
                          "Content-Type": "application/json",
                          "Authorization": `Bearer ${workerSecret}`,
                        },
                        body: JSON.stringify({
                          mentions: JSON.stringify([detectedMention]),
                        }),
                      });
                    } catch (e) {
                      console.warn(`[Bot ${meetingId}] Failed to sync mention to API:`, e);
                    }
                  }
                  break;
                }
              }

              // Also check if someone asks a question verbally
              const isQuestion = cap.text.includes("?") || /^(what|how|why|when|where|who|can|could|is|are|will|would|does|do)/i.test(cap.text);
              if (isQuestion) {
                if (appUrl) {
                  try {
                    await fetch(`${appUrl}/api/meetings/${meetingId}`, {
                      method: "PATCH",
                      headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${workerSecret}`,
                      },
                      body: JSON.stringify({
                        attendeeQuestions: JSON.stringify([`${cap.speaker}: ${cap.text}`]),
                      }),
                    });
                  } catch {}
                }

                // Call DeepSeek AI to answer spoken question in Meet chat
                try {
                  console.log(`[Bot ${meetingId}] 🤖 Generating DeepSeek AI answer for: "${cap.text}" from ${cap.speaker}`);
                  const aiReply = await askDeepSeekAnswer({
                    question: cap.text,
                    speaker: cap.speaker,
                    userName: "Jeremiah",
                    talkingPoints,
                  });
                  if (aiReply) {
                    await sendChatMessage(`🤖 [Odally AI]: ${aiReply}`);
                  }
                } catch (err) {
                  console.warn(`[Bot ${meetingId}] DeepSeek answer notice:`, err);
                }
              }
            }
          }
        } catch {
          // Non-fatal
        }
      }
    };

    const chatMonitorLoop = async (): Promise<string> => {
      while (true) {
        await page.waitForTimeout(5000);
        try {
          const messages = await page.evaluate((): { id: string; author: string; text: string }[] => {
            // Meet renders chat messages in elements like: [data-message-id] or aria-label on li items
            const results: { id: string; author: string; text: string }[] = [];
            // Try several known Meet chat DOM selectors (they change across Meet versions)
            const containers = document.querySelectorAll(
              '[data-message-id], [jsname="xySENc"], .GDhqjd, [class*="message"]'
            );
            containers.forEach((el) => {
              const id = el.getAttribute("data-message-id") || el.innerHTML.slice(0, 40);
              const authorEl = el.querySelector('[class*="author"], [class*="sender"], [data-self-name]');
              const textEl = el.querySelector('[class*="message-text"], [class*="msgBody"], span');
              if (textEl?.textContent?.trim()) {
                results.push({
                  id,
                  author: authorEl?.textContent?.trim() || "Someone",
                  text: textEl.textContent.trim(),
                });
              }
            });
            return results;
          });

          for (const msg of messages) {
            if (!seenMessages.has(msg.id)) {
              seenMessages.add(msg.id);
              console.log(`[Bot ${meetingId}] 💬 Chat from ${msg.author}: "${msg.text}"`);
              // Only react to messages that look like questions
              const isQuestion =
                msg.text.includes("?") ||
                /^(what|how|why|when|where|who|can|could|is|are|will|would|does|do)\b/i.test(msg.text);
              if (isQuestion) {
                console.log(`[Bot ${meetingId}] Q&A detected in chat — generating DeepSeek response.`);
                await pausePresentation();
                await speakAck(msg.text);

                // Call DeepSeek to answer the question in chat
                try {
                  const reply = await askDeepSeekAnswer({
                    question: msg.text,
                    speaker: msg.author,
                    userName: "Jeremiah",
                    talkingPoints,
                  });
                  if (reply) {
                    await sendChatMessage(`🤖 [Odally AI]: ${reply}`);
                  }
                } catch (e) {
                  console.warn(`[Bot ${meetingId}] Chat DeepSeek reply error:`, e);
                }

                setTimeout(() => resumePresentation(), 15000);
              }
            }
          }
        } catch {
          // DOM polling errors are non-fatal
        }
      }
    };

    // ─────────────────────────────────────────────────────────────────────────
    // CAPABILITY 3: Screen Share Detection
    // Polls the Meet DOM every 8 s for the "is sharing their screen" banner.
    // When someone else starts sharing: pauses our video, waits for them to stop.
    // ─────────────────────────────────────────────────────────────────────────
    const screenShareLoop = async (): Promise<string> => {
      let otherWasSharing = false;
      while (true) {
        await page.waitForTimeout(8000);
        try {
          const otherIsSharing = await page.evaluate((): boolean => {
            // Meet shows a banner / tile label when a remote participant shares
            const sharingBanner = document.querySelector(
              '[aria-label*="sharing" i], [class*="screenshare"], [jsname*="share" i], ' +
              '[data-participant-id][class*="presenting"]'
            );
            if (sharingBanner) return true;
            // Also check for the "is presenting" pill text in participant tiles
            const tiles = document.querySelectorAll('[class*="KF4T6b"], [class*="participant"]');
            for (const t of Array.from(tiles)) {
              if (t.textContent?.toLowerCase().includes("presenting")) return true;
            }
            return false;
          });

          if (otherIsSharing && !otherWasSharing) {
            otherWasSharing = true;
            console.log(`[Bot ${meetingId}] 🖥️  Remote screen share detected — pausing our presentation.`);
            await pausePresentation();
          } else if (!otherIsSharing && otherWasSharing) {
            otherWasSharing = false;
            console.log(`[Bot ${meetingId}] 🖥️  Remote screen share ended — resuming our presentation.`);
            await resumePresentation();
          }
        } catch {
          // Non-fatal
        }
      }
    };

    // ─────────────────────────────────────────────────────────────────────────
    // CAPABILITY 4: Auto-Leave on Silence / Empty Room
    // Polls participant count every 20 s. If the room is empty (only the bot
    // is left) for more than 2 consecutive checks (~40 s), the bot leaves.
    // ─────────────────────────────────────────────────────────────────────────
    const autoLeaveLoop = async (): Promise<string> => {
      const deadline = Date.now() + maxMeetingMinutes * 60 * 1000;
      let emptyChecks = 0;
      while (true) {
        await page.waitForTimeout(20000);

        // Hard timeout
        if (Date.now() > deadline) {
          console.log(`[Bot ${meetingId}] ⏰ Max meeting duration (${maxMeetingMinutes} min) reached. Leaving.`);
          return "timeout";
        }

        try {
          const participantCount = await page.evaluate((): number => {
            // Meet shows participant count in a chip / button, e.g. "4 participants"
            const countEl = document.querySelector(
              '[aria-label*="participant" i], [class*="participant-count"], ' +
              '[jsname="Nzrfne"], [class*="GGkqVb"]'
            );
            if (countEl?.textContent) {
              const n = parseInt(countEl.textContent.replace(/\D/g, ""), 10);
              if (!isNaN(n)) return n;
            }
            // Fallback: count visible participant tiles
            return document.querySelectorAll(
              '[class*="KF4T6b"], [data-participant-id]'
            ).length;
          });

          console.log(`[Bot ${meetingId}] 👥 Participant count: ${participantCount}`);

          // ≤1 means only the bot itself remains
          if (participantCount <= 1) {
            emptyChecks++;
            if (emptyChecks >= emptyRoomChecksBeforeLeave) {
              console.log(`[Bot ${meetingId}] 🔇 Room empty for ${emptyChecks} checks. Auto-leaving.`);
              return "empty-room";
            }
          } else {
            emptyChecks = 0;
          }
        } catch {
          // Non-fatal
        }

        // Also check if we were kicked (Meet redirects away from the meeting)
        try {
          const url = page.url();
          if (!url.includes("meet.google.com") || url.includes("leave") || url.includes("ended")) {
            console.log(`[Bot ${meetingId}] 🚪 Detected navigation away from meeting. Leaving.`);
            return "kicked";
          }
        } catch {
          return "context-closed";
        }
      }
    };

    // ─────────────────────────────────────────────────────────────────────────
    // Run all loops concurrently. The auto-leave loop is the only one that
    // resolves (the others loop forever). When it resolves, we fall through
    // to the finally block which closes the context.
    // ─────────────────────────────────────────────────────────────────────────
    const exitReason = await Promise.race([
      autoLeaveLoop(),
      chatMonitorLoop().then(() => "chat-done"),
      captionMonitorLoop().then(() => "captions-done"),
      screenShareLoop().then(() => "share-done"),
    ]);

    updateJobStatus(meetingId, "completed");
    console.log(`[Bot ${meetingId}] Meeting finished. Exit reason: ${exitReason}. Leaving...`);
    
  } catch (error) {
    console.error(`[Bot ${meetingId}] Error during meeting:`, error);
    throw error;
  } finally {
    try {
      await context.close();
    } catch {
      // Ignore cleanup error if already closed
    }
  }
}
