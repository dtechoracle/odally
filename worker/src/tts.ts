/**
 * Text-to-Speech (TTS) Service for Odally Meeting Agent
 * Generates natural spoken audio to inject directly into Google Meet's microphone stream.
 * Includes in-memory caching for zero-latency instant conversational fillers ("Uhmm...", "Right, so...").
 */

const ttsCache = new Map<string, string[]>();

/**
 * Common instant conversational fillers pre-cached in memory for 0ms response latency
 */
export const INSTANT_FILLERS = [
  "Uhmm, let's see...",
  "Uhmm, yeah, so...",
  "Well, looking at that...",
  "Right, good question...",
  "Uhmm, regarding that...",
];

export const INTERRUPTION_YIELDS = [
  "Sorry, go ahead!",
  "Oh, go ahead, sorry!",
];

/**
 * Split long text into natural sentence chunks (up to ~160 chars) for TTS engines
 */
function chunkText(text: string, maxLen = 160): string[] {
  const sentences = text.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [text];
  const chunks: string[] = [];
  let current = "";

  for (const s of sentences) {
    const trimmed = s.trim();
    if (!trimmed) continue;
    if ((current + " " + trimmed).trim().length <= maxLen) {
      current = (current + " " + trimmed).trim();
    } else {
      if (current) chunks.push(current);
      if (trimmed.length > maxLen) {
        const words = trimmed.split(" ");
        let sub = "";
        for (const w of words) {
          if ((sub + " " + w).trim().length <= maxLen) {
            sub = (sub + " " + w).trim();
          } else {
            if (sub) chunks.push(sub);
            sub = w;
          }
        }
        if (sub) current = sub;
      } else {
        current = trimmed;
      }
    }
  }
  if (current) chunks.push(current);
  return chunks.length > 0 ? chunks : [text];
}

/**
 * Fetch MP3 audio chunk using Google TTS
 */
async function fetchGoogleTTSChunk(text: string): Promise<Buffer> {
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
 * Synthesize speech audio as Base64 MP3 buffers with in-memory caching
 */
export async function synthesizeSpeechToBase64List(text: string): Promise<string[]> {
  const trimmed = text.trim();
  if (!trimmed) return [];

  // Check cache first for instant playback
  if (ttsCache.has(trimmed)) {
    return ttsCache.get(trimmed)!;
  }

  const chunks = chunkText(trimmed);
  const base64List: string[] = [];

  for (const chunk of chunks) {
    try {
      const buffer = await fetchGoogleTTSChunk(chunk);
      base64List.push(buffer.toString("base64"));
    } catch (err) {
      console.warn(`[TTS] Error synthesizing chunk "${chunk}":`, err);
    }
  }

  if (base64List.length > 0) {
    ttsCache.set(trimmed, base64List);
  }

  return base64List;
}

/**
 * Pre-warm instant fillers into memory on startup so they play with 0ms latency
 */
export async function prewarmFillers(): Promise<void> {
  console.log("⚡ [TTS] Pre-warming instant conversational fillers...");
  const allToWarm = [...INSTANT_FILLERS, ...INTERRUPTION_YIELDS];
  await Promise.allSettled(allToWarm.map((f) => synthesizeSpeechToBase64List(f)));
  console.log("⚡ [TTS] Fillers ready in memory for instant ~300ms reaction time!");
}
