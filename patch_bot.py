import sys

with open('worker/src/bot.ts', 'r', encoding='utf8') as f:
    c = f.read()

find_str = """  const context = await browser.newContext({
    permissions: ["camera", "microphone"],
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  });"""

replace_str = """  const contextOptions: any = {
    permissions: ["camera", "microphone"],
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  };

  if (fs.existsSync("auth.json")) {
    console.log(`[Bot ${meetingId}] Using saved Google Auth session from auth.json!`);
    contextOptions.storageState = "auth.json";
  } else {
    console.log(`[Bot ${meetingId}] No auth.json found. Attempting to join anonymously.`);
  }

  const context = await browser.newContext(contextOptions);"""

c = c.replace('import { updateJobStatus } from "./index";', 'import { updateJobStatus } from "./index";\nimport * as fs from "fs";')
c = c.replace(find_str, replace_str)

with open('worker/src/bot.ts', 'w', encoding='utf8') as f:
    f.write(c)
