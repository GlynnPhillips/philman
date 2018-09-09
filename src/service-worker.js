const cacheName = 'philman-ytoJj5qJkwiM2A==';

self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(cacheName).then(cache => {
			return cache.addAll([
				'/',
				'index.html',
				'/dist/fonts/big-john.ttf',
				'/dist/fonts/big-john.woff',
				'/dist/fonts/big-john.woff2',
				'/dist/fonts/Champagne-&-Limousines.ttf',
				'/dist/fonts/Champagne-&-Limousines.woff',
				'/dist/fonts/Champagne-&-Limousines.woff2',
				'/dist/main.css'
			]);
		}).then(() => self.skipWaiting())
	);
});


self.addEventListener('activate', event => {
	event.waitUntil(
		caches.keys().then(keyList => {
			return Promise.all(keyList.map(key => {
				if (key !== cacheName) {
					console.log('[ServiceWorker] Removing old cache', key);
					return caches.delete(key);
				}
			})).then(() => console.log('New cache now ready'));
		})
	);

	return self.clients.claim();
});

self.addEventListener('fetch', event => {
	if (event.request.url.startsWith(self.location.origin) && event.request.method === 'GET') {
		event.respondWith(
			caches.match(event.request).then(cachedResponse => {
				return cachedResponse || fetch(event.request);
			})
		);
	} else {
		return;
	}
});
