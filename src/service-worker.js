self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open('wasson').then(function(cache) {
			console.log('DOING THIS')
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
