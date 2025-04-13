// sw.js (Service Worker файл)

// Конфигурация
const CACHE_NAME = 'horizon-lms-v1.0'; // Меняйте версию при обновлении
const OFFLINE_URL = '/offline.html'; // Страница для оффлайн режима
const PRECACHE_URLS = [ // Ресурсы для предварительного кэширования
  '/',
  OFFLINE_URL
];

// Установка Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Кэширование основных ресурсов');
        return cache.addAll(PRECACHE_URLS);
      })
      .then(() => self.skipWaiting()) // Активация сразу после установки
  );
});

// Активация и очистка старых кэшей
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Удаление старого кэша:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim()) // Контроль над всеми клиентами
  );
});

// Обработка сетевых запросов
self.addEventListener('fetch', (event) => {
  // Пропускаем POST-запросы и другие не-GET
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Стратегия: Cache First, затем Network
        return cachedResponse || fetch(event.request)
          .then((response) => {
            console.log(response)
            // Кэшируем новые ресурсы
            return caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, response.clone());
              return response;
            });
          })
          .catch(() => {
            // Обработка оффлайн режима
            if (event.request.mode === 'navigate') {
              return caches.match(OFFLINE_URL);
            }
          });
      })
  );
});

// Фоновая синхронизация (требует разрешения)
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-data') {
    event.waitUntil(syncData());
  }
});

// Push-уведомления
self.addEventListener('push', (event) => {
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: '/icons/icon-192.png',
      badge: '/icons/badge.png'
    })
  );
});

// Вспомогательные функции
async function syncData() {
  console.log("testing")
}