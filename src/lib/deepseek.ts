/**
 * DeepSeek AI Service Client
 * Uses deepseek-chat (DeepSeek-V3) for:
 * 1. Post-meeting AI Executive Summary & Action Items
 * 2. Professional Follow-Up Email Generation
 * 3. Real-time Q&A answers based on briefing materials & talking points
 */

const DEEPSEEK_API_URL = "https://api.deepseek.com/chat/completions";

function getApiKey(): string {
  const key = process.env.DEEPSEEK_API_KEY;
  if (!key) {
    throw new Error("DEEPSEEK_API_KEY is not configured in environment variables.");
  }
  return key;
}

export async function callDeepSeek(
  messages: { role: "system" | "user" | "assistant"; content: string }[],
  temperature = 0.5
): Promise<string> {
  const apiKey = getApiKey();

  const response = await fetch(DEEPSEEK_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "deepseek-chat",
      messages,
      temperature,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`DeepSeek API error (${response.status}): ${errorText}`);
  }

  const data = await response.json();
  const content = data.choices?.[0]?.message?.content;
  if (!content) throw new Error("Empty response from DeepSeek API");
  return content.trim();
}

/**
 * Generate post-meeting executive summary & action items using DeepSeek
 */
export async function generateMeetingSummaryWithAI(params: {
  title: string;
  userName: string;
  talkingPoints?: string | null;
  documentName?: string | null;
  keywordAlerts?: string | null;
  detectedMentions?: any[];
  attendeeQuestions?: any[];
}): Promise<{ bullets: string[]; actionItems: string[]; attendees?: string[] }> {
  const {
    title,
    userName,
    talkingPoints,
    documentName,
    keywordAlerts,
    detectedMentions = [],
    attendeeQuestions = [],
  } = params;

  // Extract known attendees & speakers from detected mentions and questions
  const knownParticipants = new Set<string>();
  if (Array.isArray(detectedMentions)) {
    for (const m of detectedMentions) {
      if (m?.speaker && !m.speaker.toLowerCase().includes("odally") && !m.speaker.toLowerCase().includes("you")) {
        knownParticipants.add(m.speaker.trim());
      }
    }
  }
  if (Array.isArray(attendeeQuestions)) {
    for (const q of attendeeQuestions) {
      if (typeof q === "string") {
        const parts = q.split(":");
        if (parts.length > 1 && parts[0].trim()) {
          const name = parts[0].trim();
          if (!name.toLowerCase().includes("odally") && !name.toLowerCase().includes("you")) {
            knownParticipants.add(name);
          }
        }
      } else if (q?.author || q?.speaker) {
        const name = (q.author || q.speaker).trim();
        if (!name.toLowerCase().includes("odally") && !name.toLowerCase().includes("you")) {
          knownParticipants.add(name);
        }
      }
    }
  }

  const prompt = `You are Odally, an AI meeting surrogate agent that attended the Google Meet session "${title}" on behalf of ${userName}.

Meeting Context:
- Presenter/User: ${userName}
- Meeting Title: ${title}
- Fed Talking Points/Briefing: ${talkingPoints || "None specified"}
- Attached Document: ${documentName || "None"}
- Keywords Watched: ${keywordAlerts || "None"}
- Known Participants/Speakers Identified: ${JSON.stringify(Array.from(knownParticipants))}
- Mentions detected during call: ${JSON.stringify(detectedMentions)}
- Questions asked by attendees: ${JSON.stringify(attendeeQuestions)}

Instructions for the executive recap:
1. List all people/attendees who attended, spoke, or raised questions in the "attendees" array. Include names from the context above.
2. In "bullets", provide 3 to 4 concise, high-impact bullet points. CRITICAL: Explicitly mention the names of people who asked questions, spoke, or contributed (e.g. "Sarah Chen raised questions regarding...", "David Miller inquired about...").
3. In "actionItems", provide 2 to 3 concrete next steps for ${userName} or the attendees, explicitly assigning actions to individuals whenever applicable.

Return ONLY a valid JSON object with exactly these keys (no markdown formatting, no code fences):
{
  "attendees": [
    "Full Name of participant"
  ],
  "bullets": [
    "Concise recap point explicitly mentioning participants by name..."
  ],
  "actionItems": [
    "Action item for ${userName} or team member..."
  ]
}`;

  try {
    const raw = await callDeepSeek([
      { role: "system", content: "You are a professional executive meeting summarizer. Respond only with valid JSON." },
      { role: "user", content: prompt },
    ]);

    // Parse JSON safely (stripping any accidental markdown code fences)
    const cleaned = raw.replace(/^```json/i, "").replace(/^```/, "").replace(/```$/, "").trim();
    const parsed = JSON.parse(cleaned);

    const extractedAttendees = Array.isArray(parsed.attendees) && parsed.attendees.length > 0
      ? parsed.attendees
      : Array.from(knownParticipants);

    return {
      attendees: extractedAttendees,
      bullets: Array.isArray(parsed.bullets) && parsed.bullets.length > 0 ? parsed.bullets : [
        `Odally attended "${title}" on behalf of ${userName}.`,
        talkingPoints ? `Presented: ${talkingPoints.slice(0, 100)}...` : `Represented ${userName} during discussion.`,
        `Meeting completed and recorded.`,
      ],
      actionItems: Array.isArray(parsed.actionItems) && parsed.actionItems.length > 0 ? parsed.actionItems : [
        `Review attendee questions and discussions from the call.`,
        `Send follow-up communication to meeting participants.`,
      ],
    };
  } catch (err) {
    console.warn("[DeepSeek] Summary generation failed, using intelligent fallback:", err);
    return {
      attendees: Array.from(knownParticipants),
      bullets: [
        `The Odally agent attended "${title}" on behalf of ${userName}.`,
        talkingPoints ? `Highlighted core briefing points: "${talkingPoints.slice(0, 120)}..."` : `Monitored discussion items and attendee interaction.`,
        `All presentation topics covered; follow-up items noted for review.`,
      ],
      actionItems: [
        `Review attendee questions captured during the call.`,
        `Distribute the follow-up draft to participants.`,
      ],
    };
  }
}

/**
 * Generate 1-click follow-up email draft using DeepSeek
 */
export async function generateFollowUpEmailWithAI(params: {
  title: string;
  userName: string;
  summaryBullets: string[];
  actionItems: string[];
  attendeeQuestions?: any[];
}): Promise<string> {
  const { title, userName, summaryBullets, actionItems, attendeeQuestions = [] } = params;

  const prompt = `Write a polite, professional follow-up email from ${userName} to attendees of the meeting "${title}".
Context:
- Summary points:
${summaryBullets.map((b) => `  * ${b}`).join("\n")}
- Action items:
${actionItems.map((a) => `  * ${a}`).join("\n")}
- Questions asked:
${attendeeQuestions.map((q: any) => typeof q === "string" ? `  * ${q}` : `  * ${q.author || "Attendee"}: ${q.question || q.text}`).join("\n")}

Format the response as:
Subject: [Clear, compelling subject line]

Hi everyone,

[Warm opening thanking them for their time]
[Quick 2-3 sentence recap and address of questions]
[Key next steps]

Best regards,
${userName}`;

  try {
    return await callDeepSeek([
      { role: "system", content: "You write clear, polite executive follow-up emails. Output the full email text." },
      { role: "user", content: prompt },
    ]);
  } catch (err) {
    console.warn("[DeepSeek] Email generation failed, using fallback:", err);
    return `Subject: Follow-up & Next Steps: ${title}\n\nHi everyone,\n\nThank you for joining our session on "${title}". My AI agent Odally attended on my behalf to present the update and take notes.\n\nKey takeaways:\n${summaryBullets.map((b) => `• ${b}`).join("\n")}\n\nNext steps:\n${actionItems.map((a) => `• ${a}`).join("\n")}\n\nPlease let me know if you have any questions!\n\nBest regards,\n${userName}`;
  }
}
