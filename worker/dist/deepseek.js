"use strict";
/**
 * Worker DeepSeek Client for Real-Time Meet Chat & Voice Responses
 * Tuned for natural human conversation with conversational disfluencies ("Uhmm..."),
 * contractions, punchy rhythm, and turn-taking prompts.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.askDeepSeekAnswer = askDeepSeekAnswer;
const DEEPSEEK_API_URL = "https://api.deepseek.com/chat/completions";
async function askDeepSeekAnswer(params) {
    const { question, speaker, userName = "the presenter", talkingPoints = "", documentName = "", apiKey = process.env.DEEPSEEK_API_KEY || "sk-3fac4c3cd3724daea515cbc307d36378", } = params;
    const prompt = `You are Odally, a sharp, friendly AI colleague attending a live Google Meet call on behalf of ${userName}.
An attendee named "${speaker}" asked: "${question}".

Briefing & Materials provided by ${userName}:
${talkingPoints ? `${talkingPoints}` : "Web development curriculum and practical project milestones."}
${documentName ? `Attached Document: ${documentName}` : ""}

CONVERSATIONAL RULES (MUST FOLLOW):
1. Speak naturally like a real human in a meeting, NOT like an AI or an essay.
2. Begin naturally with a conversational touch (e.g., "Uhmm, so basically...", "Well, yeah...", "Right, so looking at the curriculum...").
3. Use spoken contractions ("we're", "it's", "you'll", "there's").
4. Keep the answer to 1 to 2 punchy, spoken sentences so you don't monologue.
5. End with a natural turn-taking prompt (e.g. "Does that make sense?", "Does that help?", "Want me to break that down further?").
6. Speak directly on behalf of ${userName}.`;
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
                    {
                        role: "system",
                        content: "You are Odally, a human-sounding conversational meeting agent. You speak concisely, use natural fillers like 'Uhmm', 'Well', contractions, and friendly conversational rhythm.",
                    },
                    { role: "user", content: prompt },
                ],
                temperature: 0.7,
            }),
        });
        if (!res.ok) {
            console.warn(`[DeepSeek Worker] HTTP ${res.status}: ${await res.text()}`);
            return `Uhmm, good question ${speaker}! I have noted this down for ${userName} to follow up on.`;
        }
        const data = await res.json();
        const answer = data.choices?.[0]?.message?.content?.trim();
        return answer || `Uhmm, thanks ${speaker}, I've recorded your question for ${userName}.`;
    }
    catch (err) {
        console.warn("[DeepSeek Worker] Error generating answer:", err);
        return `Uhmm, thanks ${speaker}! I'll have ${userName} follow up with you on that.`;
    }
}
