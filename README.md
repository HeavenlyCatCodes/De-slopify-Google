# De-slopify

**Strip Gemini and AI Overviews off Google Search, Gmail, Docs, Drive, and YouTube.**

De-slopify is a free Chrome and Firefox extension that hides Google’s AI chrome so the page is just the product again: links, mail, documents. No sparkle button. No AI Overview block. No “Help me write.”

It does **not** open or blank [gemini.google.com](https://gemini.google.com). That site is the Gemini app. This extension only removes Gemini *integration* from the rest of Google.

[Download the latest release](https://github.com/HeavenlyCatCodes/De-slopify-Google/releases/latest)

| Browser | Zip |
| --- | --- |
| Chrome, Edge, Brave, Arc, Kiwi | [de-slopify-chrome-1.1.0.zip](https://github.com/HeavenlyCatCodes/De-slopify-Google/releases/download/v1.1.0/de-slopify-chrome-1.1.0.zip) |
| Firefox (desktop and Android) | [de-slopify-firefox-1.1.0.zip](https://github.com/HeavenlyCatCodes/De-slopify-Google/releases/download/v1.1.0/de-slopify-firefox-1.1.0.zip) |

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

1. Download [de-slopify-chrome-1.1.0.zip](https://github.com/HeavenlyCatCodes/De-slopify-Google/releases/download/v1.1.0/de-slopify-chrome-1.1.0.zip).
2. Unzip it to a folder you will keep.
3. Open `chrome://extensions` (or `edge://extensions`).
4. Turn on **Developer mode**.
5. Click **Load unpacked**.
6. Select the unzipped folder (the one with `manifest.json`).
7. Open [google.com](https://www.google.com) or [mail.google.com](https://mail.google.com).

Incognito: extension **Details** → **Allow in Incognito**.

## Install on Firefox

1. Download [de-slopify-firefox-1.1.0.zip](https://github.com/HeavenlyCatCodes/De-slopify-Google/releases/download/v1.1.0/de-slopify-firefox-1.1.0.zip).
2. Open `about:debugging#/runtime/this-firefox`.
3. Click **Load Temporary Add-on…**.
4. Choose the zip, or unzip it and choose `manifest.json`.

Firefox drops temporary add-ons when you quit. Load the folder again after a restart.

## Install on a phone

Stock Chrome (Android and iOS) cannot load unpacked extensions. Use a browser that can.

**Firefox for Android**

1. Install [Firefox](https://www.mozilla.org/firefox/browsers/mobile/android/).
2. On a computer, open Firefox → `about:debugging` → **Enable USB devices**.
3. On the phone, enable USB debugging and connect it.
4. In desktop Firefox, under the phone, click **Load Temporary Add-on…** and choose `manifest.json` or the Firefox zip.

**Kiwi, Lemur, or similar Chromium browsers**

1. Download the Chrome zip from the [latest release](https://github.com/HeavenlyCatCodes/De-slopify-Google/releases/latest).
2. Unzip it on the phone.
3. Open the browser’s extensions page, turn on developer mode, and load the unzipped folder.

The popup is full-width on small screens, with larger ON/OFF switches. Mobile Google Search, Gmail in the browser, and YouTube in the browser are covered. The native Google and YouTube apps cannot run extensions.

## How to use it

Click the **De-slopify** icon.

- **ON / OFF** — master switch (green badge when hiding, gray when not)
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

Writes `dist/de-slopify-chrome-1.1.0.zip` and `dist/de-slopify-firefox-1.1.0.zip`.

## Changelog

See [CHANGELOG.md](CHANGELOG.md).

## License

Use and share freely for personal browsing.
