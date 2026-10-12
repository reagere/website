// No-op service worker so a request for /sw.js is not a 404.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
