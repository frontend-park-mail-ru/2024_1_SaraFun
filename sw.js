const CACHE_NAME = 'my-cache-v1';
const URLS_TO_CACHE = [
    '/',
    '/index.html',
    '/styles.css',
    '/index.ts',
];

// Установка кэша
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installing...');
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Service Worker: Caching files');
            return cache.addAll(URLS_TO_CACHE);
        })
    );
});

// Активация сервис-воркера и удаление старых кэшей
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

// Обработка запросов
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
                // Если в кэше есть ответ, возвращаем его, иначе загружаем из сети
                return response || fetch(event.request).then((networkResponse) => {
                    // Кэшируем ответ, если это GET-запрос
                    if (event.request.method === 'GET' && networkResponse.ok) {
                        return caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, networkResponse.clone());
                            return networkResponse;
                        });
                    }
                    return networkResponse;
                });
            }).catch(() => {
                // Если произошла ошибка и нет кэшированного ответа, можно вернуть страницу оффлайна
                return caches.match('/index.html'); // или другой ресурс для отображения в оффлайне
            })
        );
    }
});