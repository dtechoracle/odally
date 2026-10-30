/**
 * Worker DeepSeek Client for Real-Time Meet Chat Responses
 */

const DEEPSEEK_API_URL = "https://api.deepseek.com/chat/completions";

export async function askDeepSeekAnswer(params: {
  question: string;
  speaker: string;
  userName?: string;
  talkingPoints?: string;
  documentName?: string;
  apiKey?: string;
}): Promise<string> {
  const {
    question,
    speaker,
    userName = "the presenter",
    talkingPoints = "",
    documentName = "",
    apiKey = process.env.DEEPSEEK_API_KEY || "sk-3fac4c3cd3724daea515cbc307d36378",
  } = params;

  const prompt = `You are Odally, an AI meeting surrogate attending a Google Meet call on behalf of ${userName}.
An attendee named "${speaker}" asked: "${question}".

Presenter's Materials & Briefing:
${talkingPoints ? `${talkingPoints}` : "Web development curriculum and presentation update."}
${documentName ? `Attached Document: ${documentName}` : ""}

Instructions:
1. Answer the question directly and knowledgeably in 1-2 natural spoken sentences, speaking directly on behalf of ${userName}.
2. If asked about the curriculum, files, or topics, explain the web development curriculum (HTML, CSS, JavaScript, React, Node.js, and practical projects) confidently.
3. Keep the answer concise and friendly for spoken audio.`;

  try {
    const res = await fetch(DEEPSEEK_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: "You are Odally, an AI meeting surrogate. Keep responses concise (1-2 sentences) and helpful." },
          { role: "user", content: prompt },
        ],
        temperature: 0.5,
      }),
    });

    if (!res.ok) {
      console.warn(`[DeepSeek Worker] HTTP ${res.status}: ${await res.text()}`);
      return `Thanks for the question, ${speaker}! I have noted this down for ${userName} to follow up on.`;
    }

    const data = await res.json();
    const answer = data.choices?.[0]?.message?.content?.trim();
    return answer || `Thanks ${speaker}, I've recorded your question for ${userName}.`;
  } catch (err) {
    console.warn("[DeepSeek Worker] Error generating answer:", err);
    return `Thanks ${speaker}! I have noted this down for ${userName} to follow up on.`;
  }
}
