self.addEventListener('install', event => {
	event.waitUntil(
		caches.open('wasson').then(cache => {
			return cache.addAll([
				'/dist/fonts/big-john.ttf',
				'/dist/fonts/big-john.woff',
				'/dist/fonts/big-john.woff2',
				'/dist/fonts/Champagne-&-Limousines.ttf',
				'/dist/fonts/Champagne-&-Limousines.woff',
				'/dist/fonts/Champagne-&-Limousines.woff2'
			]);
		})
	);
});

self.addEventListener('fetch', event => {
	if (event.request.url.startsWith(self.location.origin) && event.request.method === 'GET') {
		event.respondWith(
			caches.match(event.request).then(cachedResponse => {
				console.log('Cache response', cachedResponse)
				return cachedResponse || fetch(event.request);
			})
		);
	} else {
		return;
	}
});
