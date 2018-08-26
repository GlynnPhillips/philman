mapboxgl.accessToken = 'pk.eyJ1IjoiZ2x5bm5waGlsbGlwcyIsImEiOiJjams2eXhkZmUweXBkM3FrM3Vwb3phcmxqIn0.2hTFJAe4vzRLTsvkVhq7HQ';

const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/glynnphillips/cjk795lf376tg2rscoi5jozg8',
	center: [-5.0183967, 50.3862976],
	zoom: 12.0
});

map.scrollZoom.disable();
