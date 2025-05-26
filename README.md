<<<<<<< HEAD
# irtc-login-automation
=======
# IRCTC Login Automation (JavaScript)

## 🛠 Tools Used
- JavaScript
- Playwright

## 🧠 My Approach
1. Used Playwright to launch browser and open IRCTC site.
2. Clicked on Login button.
3. Filled in username and password.
4. Manually entered Captcha and logged in.
5. Used `page.reload()` every 30 seconds to keep session alive for 2 minutes.

## ⏱ Time Spent
~5 hours

## 💡 Notes
- Manual captcha solving was allowed as full automation is impractical within short time.
- Headless mode disabled for better visibility during demo.

## 📜 Run Instructions
```bash
npm install
npx playwright install
node main.js
```
>>>>>>> 40899fe (Initial commit - Upload irtc-login-automation code)
