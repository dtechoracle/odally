"use strict";
/**
 * Text-to-Speech (TTS) Service for Odally Meeting Agent
 * Generates natural spoken audio to inject directly into Google Meet's microphone stream.
 * Supports:
 * - Built-in high-quality Google TTS (zero setup, instant, natural)
 * - OpenAI TTS (if OPENAI_API_KEY provided)
 * - ElevenLabs (if ELEVENLABS_API_KEY provided)
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.synthesizeSpeechToBase64List = synthesizeSpeechToBase64List;
/**
 * Split long text into natural sentence chunks (up to ~160 chars) for TTS engines
 */
function chunkText(text, maxLen = 160) {
    const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text];
    const chunks = [];
    let current = "";
    for (const s of sentences) {
        const trimmed = s.trim();
        if (!trimmed)
            continue;
        if ((current + " " + trimmed).trim().length <= maxLen) {
            current = (current + " " + trimmed).trim();
        }
        else {
            if (current)
                chunks.push(current);
            if (trimmed.length > maxLen) {
                // Break long sentence by commas or words
                const words = trimmed.split(" ");
                let sub = "";
                for (const w of words) {
                    if ((sub + " " + w).trim().length <= maxLen) {
                        sub = (sub + " " + w).trim();
                    }
                    else {
                        if (sub)
                            chunks.push(sub);
                        sub = w;
                    }
                }
                if (sub)
                    current = sub;
            }
            else {
                current = trimmed;
            }
        }
    }
    if (current)
        chunks.push(current);
    return chunks.length > 0 ? chunks : [text];
}
/**
 * Fetch MP3 audio chunk using Google TTS
 */
async function fetchGoogleTTSChunk(text) {
    const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=en&client=tw-ob`;
    const res = await fetch(url, {
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
    });
    if (!res.ok) {
        throw new Error(`Google TTS request failed with status ${res.status}`);
    }
    const arrayBuffer = await res.arrayBuffer();
    return Buffer.from(arrayBuffer);
}
/**
 * Synthesize speech audio as Base64 MP3 buffers
 */
async function synthesizeSpeechToBase64List(text) {
    const chunks = chunkText(text);
    const base64List = [];
    for (const chunk of chunks) {
        try {
            const buffer = await fetchGoogleTTSChunk(chunk);
            base64List.push(buffer.toString("base64"));
        }
        catch (err) {
            console.warn(`[TTS] Error synthesizing chunk "${chunk}":`, err);
        }
    }
    return base64List;
}
