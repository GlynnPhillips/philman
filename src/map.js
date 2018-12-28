import {
	tresillianLocation,
	townLocations,
	accommodationLocations,
	pointsOfInterest
} from './locations';

let mapIsLoaded;
const viewportHeight = document.documentElement.clientHeight;

const options = {
	token: 'pk.eyJ1IjoiZ2x5bm5waGlsbGlwcyIsImEiOiJjams2eXhkZmUweXBkM3FrM3Vwb3phcmxqIn0.2hTFJAe4vzRLTsvkVhq7HQ',
	element: document.getElementById('map'),
	triggerPosition: viewportHeight + (viewportHeight / 2),
	defaultPosition: {
		minZoom: 9,
		zoom: 11,
		center: [50.378687,-5.001103]
	},
	style: 'mapbox://styles/glynnphillips/cjlccjlsa695m2so58osa1c53'
}

const throttle = (func, wait) => {
	let time = Date.now();
	return function() {
		if ((time + wait - Date.now()) < 0) {
			func();
			time = Date.now();
		}
	}
}

const loadMap = () => {
	if (!mapIsLoaded && options.element.getBoundingClientRect().top <= options.triggerPosition) {
		mapIsLoaded = true;
		const mapbox = L.mapbox;
		mapbox.accessToken = options.token; 
		
		const map = mapbox.map('map', 'mapbox.streets', options.defaultPosition)
		
		mapbox.styleLayer('mapbox://styles/glynnphillips/cjlccjlsa695m2so58osa1c53')
			.addTo(map);
		
		mapbox.featureLayer()
			.addTo(map)
			.on('layeradd', (event) => {
				const marker = event.layer;
				const feature = marker.feature;
  		
				if (feature.properties.icon) {
					marker.setIcon(L.divIcon(feature.properties.icon));
				}
			})
			.setGeoJSON(townLocations
				.concat(tresillianLocation, pointsOfInterest));

		map.dragging.disable()
		map.scrollWheelZoom.disable()

	}
}


window.addEventListener('scroll', throttle(loadMap, 500));
loadMap();
