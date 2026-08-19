# De-slopify

**Strip Gemini and AI Overviews off Google Search, Gmail, Docs, Drive, and YouTube.**

De-slopify is a free Chrome and Firefox extension that hides Google’s AI chrome so the page is just the product again: links, mail, documents. No sparkle button. No AI Overview block. No “Help me write.”

It does **not** open or blank [gemini.google.com](https://gemini.google.com). That site is the Gemini app. This extension only removes Gemini *integration* from the rest of Google.

## What it removes

**Google Search**

- AI Overviews at the top of results
- The **AI Mode** tab
- “Learn about AI Overviews” promo blocks

**Gmail, Docs, Sheets, Slides, Drive, Calendar, Meet**

- Ask Gemini / Try Gemini sparkle in the toolbar
- Gemini side panel entry
- Help me write
- Summarize this email
- Docs Refine bubble and the Gemini bar at the bottom of the page

**YouTube**

- Gemini chips and AI-generated summary panels when they appear

Comment buttons, emoji reactions, and normal search results stay.

## Install on Chrome, Edge, Brave, or Arc

1. Open `chrome://extensions` (or `edge://extensions`).
2. Turn on **Developer mode**.
3. Click **Load unpacked**.
4. Select the `De-slopify` folder (the one with `manifest.json`).
5. Open [google.com](https://www.google.com) or [mail.google.com](https://mail.google.com).

Incognito: extension **Details** → **Allow in Incognito**.

## Install on Firefox

1. Open `about:debugging#/runtime/this-firefox`.
2. Click **Load Temporary Add-on…**.
3. Choose `manifest.json` in this folder.

Firefox drops temporary add-ons when you quit. Load the folder again after a restart.

## How to use it

Click the **De-slopify** icon.

- **Slop off** — master switch
- **Search** — AI Overviews and AI Mode
- **Workspace** — Gemini in Gmail / Docs / Drive
- **YouTube** — Gemini chips and AI summaries

## Privacy

Runs only on Google and YouTube hosts. Uses `storage` to remember your switches. No analytics, no extra network requests.

## Build zips

```powershell
cd De-slopify
powershell -File scripts\pack.ps1
```

Writes `dist/de-slopify-chrome-1.0.0.zip` and `dist/de-slopify-firefox-1.0.0.zip`.

## License

Use and share freely for personal browsing.
