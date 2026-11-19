# Mistletoe, Main Street & the Customer Journey

A free, mobile-friendly Christmas game for a virtual all-hands meeting. Plain HTML, CSS, and JavaScript. No backend, accounts, APIs, or paid services.

## Files

| File | Purpose |
|---|---|
| `index.html` | All nine screens (poster, intro, five rounds, final score, credits) |
| `styles.css` | Evergreen, cranberry, cream, and gold styling, animations, responsive layout |
| `script.js` | Game logic, scoring, timer, awards, and restart |
| `README.md` | This file |

## Run it locally

No build step. Open `index.html` in any modern browser.

## Publish free on GitHub Pages

1. Create a free account at https://github.com if you don't have one.
2. Click **New repository**. Name it (for example `snowflake-falls`), set it to **Public**, and click **Create repository**.
3. On the new repository page, click **uploading an existing file**. Drag in `index.html`, `styles.css`, `script.js`, and `README.md`, then click **Commit changes**.
4. Go to **Settings → Pages**.
5. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
6. Set **Branch** to `main` and folder to `/ (root)`, then click **Save**.
7. Wait about one minute and refresh the Pages settings page. Your live link will appear at the top, in the form `https://<your-username>.github.io/snowflake-falls/`.

Share that link with participants. Nobody needs to download or install anything.

## Game details

- **Five rounds**, one per screen, each with a 40-second countdown.
- **10 points** per correct answer, **50 points** total.
- **Timeout** records zero points and moves to feedback automatically.
- **Answers lock** after submission, so they cannot be changed.
- **Progress** appears as "Scene X of 5".
- **Awards:** 40–50 Christmas Miracle Maker · 30 Holiday Hero in Training · 20 Mistletoe Manager · 0–10 Grinch of Customer Experience.
- **Restart** is available from every screen after the poster.
- Scores and name live only in browser memory. Nothing is saved or sent anywhere.

## Editing the content

All scenarios, answer choices, explanations, awards, and feedback messages are at the top of `script.js` in the `ROUNDS` and `AWARDS` arrays. Correct answers are the `correct` index (0 = A, 1 = B, 2 = C, 3 = D). Every round is currently set to B, as specified.

Replace the placeholder story text with your full game content specification before publishing.

## Accessibility and sound

The game works fully without sound. Motion is reduced automatically for users who have enabled reduced-motion settings in their operating system.
