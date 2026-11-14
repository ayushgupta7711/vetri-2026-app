/* VETRI 2026 offline service worker */
const CACHE_NAME = 'vetri-2026-pwa-v1';
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png',
  './icons/apple-touch-icon.png'
];
self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(CORE_ASSETS);
    await self.skipWaiting();
  })());
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cached = await caches.match(req, {ignoreSearch: true});
    if (cached) return cached;
    try {
      const response = await fetch(req);
      if (response && response.ok) {
        const cache = await caches.open(CACHE_NAME);
        cache.put(req, response.clone());
      }
      return response;
    } catch (err) {
      if (req.mode === 'navigate') return (await caches.match('./index.html')) || Response.error();
      return Response.error();
    }
  })());
});
