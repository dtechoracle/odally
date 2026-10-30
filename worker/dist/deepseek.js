"use strict";
/**
 * Worker DeepSeek Client for Real-Time Meet Chat Responses
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.askDeepSeekAnswer = askDeepSeekAnswer;
const DEEPSEEK_API_URL = "https://api.deepseek.com/chat/completions";
async function askDeepSeekAnswer(params) {
    const { question, speaker, userName = "the presenter", talkingPoints = "", documentName = "", apiKey = process.env.DEEPSEEK_API_KEY || "sk-3fac4c3cd3724daea515cbc307d36378", } = params;
    const prompt = `You are Odally, a polite AI assistant attending a Google Meet call on behalf of ${userName}.
An attendee named "${speaker}" asked: "${question}".

Briefing / Materials provided by ${userName}:
${talkingPoints ? `- Talking points: ${talkingPoints}` : ""}
${documentName ? `- Document: ${documentName}` : ""}

Provide a concise, helpful 1-2 sentence response to post directly in the Google Meet chat.
If you know the answer from the briefing, answer clearly. If not, politely state that you've recorded their question and ${userName} will follow up with them directly.`;
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
    }
    catch (err) {
        console.warn("[DeepSeek Worker] Error generating answer:", err);
        return `Thanks ${speaker}! I have noted this down for ${userName} to follow up on.`;
    }
}
