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
}): Promise<{ bullets: string[]; actionItems: string[] }> {
  const {
    title,
    userName,
    talkingPoints,
    documentName,
    keywordAlerts,
    detectedMentions = [],
    attendeeQuestions = [],
  } = params;

  const prompt = `You are Odally, an AI meeting surrogate agent that attended the Google Meet session "${title}" on behalf of ${userName}.

Meeting Context:
- Presenter/User: ${userName}
- Meeting Title: ${title}
- Fed Talking Points/Briefing: ${talkingPoints || "None specified"}
- Attached Document: ${documentName || "None"}
- Keywords Watched: ${keywordAlerts || "None"}
- Mentioned during call: ${JSON.stringify(detectedMentions)}
- Questions asked by attendees: ${JSON.stringify(attendeeQuestions)}

Generate an executive post-meeting recap.
Return ONLY a valid JSON object with exactly these two keys (no markdown formatting, no code fences):
{
  "bullets": [
    "3 to 4 concise, high-impact bullet points summarizing what was presented, discussed, and key points of alignment"
  ],
  "actionItems": [
    "2 to 3 concrete, actionable next steps for ${userName} or the team"
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

    return {
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
