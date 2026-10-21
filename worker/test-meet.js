const { chromium } = require('playwright');

async function testMeet() {
  const browser = await chromium.launch({
    headless: true,
    args: [
      "--use-fake-ui-for-media-stream",
      "--use-fake-device-for-media-stream",
    ],
  });
  const context = await browser.newContext({
    permissions: ["camera", "microphone"],
  });
  const page = await context.newPage();
  console.log("Navigating...");
  await page.goto("https://meet.google.com/xnw-kymv-nmr", { waitUntil: "networkidle" });
  await page.waitForTimeout(3000);
  console.log("Taking screenshot...");
  await page.screenshot({ path: "meet-screenshot.png", fullPage: true });
  console.log("Done");
  await browser.close();
}

testMeet().catch(console.error);
