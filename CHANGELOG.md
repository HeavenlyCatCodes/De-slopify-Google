# Changelog

All notable changes to De-slopify are listed here.

## [1.1.1] — 2026-08-19

### Fixed

- Firefox Add-ons package uses POSIX paths (`icons/icon128.png`) so AMO validation accepts it.
- Raised minimum Firefox to 140 and Firefox for Android to 142 so `data_collection_permissions` is valid.

[1.1.1]: https://github.com/HeavenlyCatCodes/De-slopify-Google/releases/tag/v1.1.1

## [1.1.0] — 2026-08-19

### Added

- Mobile Google Search (`m.google.com` and the phone SERP): hide AI Overviews and AI Mode chips.
- Mobile YouTube (`m.youtube.com`) Gemini / AI-summary controls.
- Touch-sized switches and a full-width popup for Firefox on Android.
- Firefox for Android support (`gecko_android`).

### Fixed

- Phone search was not treated as Search, so AI Overviews could stay visible.

[1.1.0]: https://github.com/HeavenlyCatCodes/De-slopify-Google/releases/tag/v1.1.0

## [1.0.0] — 2026-08-19

### Added

- First Chrome and Firefox release.
- Hides Google Search **AI Overviews** and the **AI Mode** tab.
- Hides Gemini in Gmail, Docs, Drive, Calendar, and Meet (Ask Gemini, Help me write, summarize, Refine, bottom bar).
- Hides YouTube Gemini chips and AI summaries.
- Toolbar popup with a clear **ON / OFF** status and separate Search, Workspace, and YouTube switches.
- Leaves [gemini.google.com](https://gemini.google.com) alone.

[1.0.0]: https://github.com/HeavenlyCatCodes/De-slopify-Google/releases/tag/v1.0.0
