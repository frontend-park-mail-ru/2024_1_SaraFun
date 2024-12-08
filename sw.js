const CACHE_NAME = 'my-cache-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/styles.css',
  '/script.js',
  '/offline.html', // Страница для отображения в оффлайне
];

self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // console.log('Service Worker: Caching files');
      // URLS_TO_CACHE.forEach(url => {
      //   console.log(`Caching ${url}`);
      // });
      return cache.addAll(URLS_TO_CACHE).catch((error) => {
        console.error('Failed to cache:', error);
      });
    })
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            // console.log('Service Worker: Removing old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  // console.log('Service Worker: Fetching...', event.request.url);
  
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        // console.log('Service Worker: Serving from cache', event.request.url);
        return response;
      }
      // console.log('Service Worker: Fetching from network', event.request.url);
      return fetch(event.request).catch(() => {
        return caches.match('/offline.html');
      });
    })
  );
});