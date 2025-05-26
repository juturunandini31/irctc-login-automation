const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Navigate to IRCTC
  await page.goto('https://www.irctc.co.in/nget/train-search');

  // Perform login steps here...

  // Function to simulate user activity
  const keepSessionAlive = setInterval(async () => {
    try {
      await page.mouse.move(100, 100);
      await page.mouse.click(100, 100);
      await page.evaluate(() => window.scrollBy(0, 100));
      console.log('Simulated user activity to keep session alive.');
    } catch (error) {
      console.error('Error during session keep-alive:', error);
    }
  }, 30000); // Every 30 seconds

  // Monitor session status
  const monitorSession = setInterval(async () => {
    try {
      const currentURL = page.url();
      if (currentURL.includes('session-expired')) {
        console.log('Session has expired.');
        clearInterval(keepSessionAlive);
        clearInterval(monitorSession);
        await browser.close();
      }
    } catch (error) {
      console.error('Error monitoring session:', error);
    }
  }, 10000); // Every 10 seconds

  // Keep the session alive for 2 minutes
  setTimeout(async () => {
    clearInterval(keepSessionAlive);
    clearInterval(monitorSession);
    console.log('Completed 2 minutes of session activity.');
    await browser.close();
  }, 120000); // 2 minutes
})();
