const CACHE_NAME = 'my-cache-v1';
const URLS_TO_CACHE = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
];

self.addEventListener('install', (event) => {
    console.log('Service Worker: Installing...');
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Service Worker: Caching files');
            return cache.addAll(URLS_TO_CACHE);
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
                        console.log('Service Worker: Removing old cache', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    console.log('Service Worker: Fetching...', event.request.url);
    
    // Проверяем, является ли запрос POST-запросом на регистрацию или авторизацию
    if (event.request.method === 'POST' && 
        (event.request.url.includes('/signin') || event.request.url.includes('/signup'))) {
        
        // Прямой запрос к сети без кэширования
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    // Обработка ответа, если нужно
                    return response;
                })
                .catch(error => {
                    console.error('Fetch failed:', error);
                    throw error; // Перебрасываем ошибку для обработки на клиенте
                })
        );
    } else {
        // Для остальных запросов используем кэш
        event.respondWith(
            caches.match(event.request).then((response) => {
                return response || fetch(event.request);
            })
        );
    }
});