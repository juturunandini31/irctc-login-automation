# IRCTC Login Automation (JavaScript)

## 🛠 Tools Used
- JavaScript
- Playwright

## 🧠 My Approach
1. Used Playwright to launch the browser and open the IRCTC website.
2. Clicked on the Login button.
3. Filled in username and password.
4. Manually entered the Captcha and logged in.
5. Used `page.reload()` every 30 seconds to keep the session alive for 2 minutes.

## ⏱ Time Spent
~5 hours

## 💡 Notes
- Manual captcha solving was necessary, as full automation is impractical due to Captcha restrictions.
- Headless mode was disabled for better visibility during the demo.

## 📜 Run Instructions

```bash
npm install
npx playwright install
node main.js
