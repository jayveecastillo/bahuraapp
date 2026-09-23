/* Bahura service worker: keeps the app and map working with no signal. */
const SHELL = 'bahura-shell-v1';
const RUNTIME_TILES = 'bahura-tiles';
const MAX_RUNTIME_TILES = 600;
const SHELL_FILES = [
  './', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.js',
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(SHELL).then(c => Promise.all(
    SHELL_FILES.map(u => c.add(new Request(u, { mode: u.startsWith('http') ? 'cors' : 'same-origin' })).catch(() => {}))
  )).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(k => k.startsWith('bahura-shell-') && k !== SHELL).map(k => caches.delete(k))
  )).then(() => self.clients.claim()));
});

async function trim(){
  const c = await caches.open(RUNTIME_TILES);
  const keys = await c.keys();
  for (let i = 0; i < keys.length - MAX_RUNTIME_TILES; i++) await c.delete(keys[i]);
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Map tiles: saved area or recently viewed first, then network.
  if (url.hostname.endsWith('arcgisonline.com')) {
    e.respondWith(caches.match(req, { ignoreVary: true }).then(hit => hit || fetch(req).then(res => {
      if (res.ok) {
        const copy = res.clone();
        caches.open(RUNTIME_TILES).then(c => c.put(req, copy)).then(() => Math.random() < 0.05 && trim());
      }
      return res;
    }).catch(() => new Response('', { status: 504 }))));
    return;
  }

  // Page loads: try network for updates, fall back to the saved app.
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(res => {
      const copy = res.clone(); caches.open(SHELL).then(c => c.put('./index.html', copy));
      return res;
    }).catch(() => caches.match('./index.html')));
    return;
  }

  // Everything else (Leaflet, fonts, icons): cache first, refresh in background.
  e.respondWith(caches.match(req).then(hit => {
    const net = fetch(req).then(res => {
      if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(SHELL).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => hit);
    return hit || net;
  }));
});
