VETRI 2026 — INSTALLABLE IPHONE HOME SCREEN APP
SBI Scale-I to Scale-II promotion preparation

WHAT THIS PACKAGE IS
This is an installable Progressive Web App (PWA), not a signed native iOS IPA. It has an app name, home-screen icons, standalone display mode, and a service worker that caches the app for offline use after the first successful load.

IMPORTANT: iOS INSTALLATION REQUIRES HTTPS
Safari will not install a local ZIP/HTML file as a Home Screen web app. The files in this folder must first be published to a static HTTPS website. No server-side code or database is required.

PUBLISHING (GitHub Pages — free option)
1. On a computer, sign in to GitHub and create a new PUBLIC repository named vetri-2026-app.
2. Upload ALL files and folders from this package to the repository root. Keep index.html, manifest.webmanifest and sw.js together; keep the icons folder intact.
3. In the repository, open Settings → Pages.
4. Under Build and deployment, choose Deploy from a branch; select main and /(root), then Save.
5. Wait for GitHub Pages to publish the site. Your URL will look like https://YOUR-USERNAME.github.io/vetri-2026-app/ .
6. On the iPhone, open that HTTPS URL in Safari (not an in-app browser).
7. Tap Share → Add to Home Screen. If shown, enable Open as Web App, then tap Add.
8. Launch VETRI 2026 from the new Home Screen icon. Keep Safari open briefly on the first launch so the service worker can cache the app. After the cache is complete, practice can work offline.

OFFLINE NOTES
- The first visit needs internet to load and cache the app.
- Later launches from the Home Screen can work offline after caching completes.
- Practice progress uses browser local storage on that iPhone. Clearing Safari website data may erase it.
- Keep the published files at the same path; the service worker cache is scoped to this app folder.

CONTENTS
- index.html: question bank and quiz interface (1,889 MCQs, 38 topic groups)
- manifest.webmanifest: Home Screen app metadata
- sw.js: offline caching service worker
- icons/: iPhone and PWA icons

SOURCE LIMITATION
Question content and answer keys are taken from VETRI 2026 only. No outside banking knowledge is added. The question bank includes only four-option questions for which a corresponding answer key could be reliably matched. Explanations are shown only where the source provides one; otherwise the app indicates that no separate explanation is present.

NATIVE IPA
A signed native iOS IPA requires an Xcode project build/signing process and an Apple provisioning path. This package provides the installable Home Screen PWA route, which does not require App Store distribution.
