const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Go to IRCTC site
  await page.goto('https://www.irctc.co.in/nget/train-search');
  await page.waitForTimeout(5000);

  // Click Login
  await page.click('a[aria-label="Click here to Login"]');
  await page.waitForSelector('input[formcontrolname="userid"]');

  // Fill credentials
  await page.fill('input[formcontrolname="userid"]', 'your_username_here');
  await page.fill('input[formcontrolname="password"]', 'your_password_here');

  // Pause for manual captcha entry
  console.log("⏸️ Enter captcha manually & click Login. You have 60 seconds...");
  await page.waitForTimeout(60000); // Give time for manual input

  // Wait for redirection
  await page.waitForTimeout(5000);

  // Keep session alive for 2 minutes
  console.log("🔄 Keeping session alive for 2 minutes...");
  for (let i = 0; i < 4; i++) {
    await page.reload();
    await page.waitForTimeout(30000);
  }

  console.log("✅ Session maintained. Closing...");
  await browser.close();
})();
