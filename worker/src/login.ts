import { exec } from "child_process";
import * as path from "path";
import * as fs from "fs";

async function login() {
  console.log("============================================");
  console.log("🤖 BOT AUTHENTICATION SETUP (OS NATIVE MODE)");
  console.log("============================================");
  console.log("Playwright is getting caught. We are bringing out the big guns.");
  console.log("We are launching your ACTUAL Google Chrome application from your OS, but pointing it to our isolated bot-profile folder.");
  
  const profileDir = path.resolve(__dirname, "../bot-profile");
  
  // Ensure directory exists
  if (!fs.existsSync(profileDir)) {
    fs.mkdirSync(profileDir, { recursive: true });
  }

  // Windows Chrome Path
  const chromePath = `"C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"`;
  
  console.log("\nINSTRUCTIONS:");
  console.log("1. A completely normal Chrome window will open.");
  console.log("2. Because this is your actual OS Chrome, Google CANNOT detect it as a bot.");
  console.log("3. Log into your Google Account normally.");
  console.log("4. Once you see the Google Account homepage, CLOSE the browser window.");
  console.log("5. The terminal will then complete.");

  const command = `${chromePath} --user-data-dir="${profileDir}" "https://accounts.google.com"`;
  
  const child = exec(command);
  
  child.on("exit", () => {
    console.log("\n✅ Browser closed! Your pristine Google cookies are now securely saved in the 'bot-profile' folder.");
    console.log("You can now run `npm start` and the bot will load this native profile to join meetings!");
  });
}

login().catch(console.error);
