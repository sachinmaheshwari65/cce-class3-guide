const CACHE_NAME = 'cce-study-guide-v4';
const ASSETS = [
    './',
    './index.html',
    './styles.css',
    './app.js',
    './data-history.js',
    './data-polity.js',
    './data-geography.js',
    './data-english.js',
    './data-reasoning.js',
    './data-math.js',
    './data-mocktest1.js',
    './data-previousyears.js',
    './data-cce2024pattern.js',
    './manifest.json'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        }).then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request).catch(() => {
                return caches.match('./index.html');
            });
        })
    );
});
