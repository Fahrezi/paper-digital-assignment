const CACHE_NAME = 'paper-cache';
const urlsToCache = ['index.html', 'offline.html'];

//install SW
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');

        return cache.addAll(urlsToCache);
      })
  )
})

//Listen for request
self.addEventListener('fetch', (event) => {
  console.log(event.request);
  event.respondWith(
    caches.match(event.request)
      .then(() => {
        return fetch(event.request)
          .catch(() => caches.match('offline.html'))
      })
  )
})