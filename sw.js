self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('randomtext').then((cache) => cache.addAll([
      '/a2hs/',
      '/a2hs/index.html',
      '/a2hs/index.js',
      '/a2hs/style.css',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
