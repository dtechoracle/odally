"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
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
    const child = (0, child_process_1.exec)(command);
    child.on("exit", () => {
        console.log("\n✅ Browser closed! Your pristine Google cookies are now securely saved in the 'bot-profile' folder.");
        console.log("You can now run `npm start` and the bot will load this native profile to join meetings!");
    });
}
login().catch(console.error);
