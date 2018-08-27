L.mapbox.accessToken = 'pk.eyJ1IjoiZ2x5bm5waGlsbGlwcyIsImEiOiJjams2eXhkZmUweXBkM3FrM3Vwb3phcmxqIn0.2hTFJAe4vzRLTsvkVhq7HQ';

var map = L.mapbox.map('map', 'mapbox.streets')
  .setView([50.378687,-5.001103], 12);

var styleLayer = L.mapbox.styleLayer('mapbox://styles/glynnphillips/cjlccjlsa695m2so58osa1c53')
    .addTo(map);

var markerLayer = L.mapbox.featureLayer().addTo(map);

L.circle([50.378687,-5.001103], 1000, {
	color: '#004c53',
	fill: '#004c53'
}).addTo(map);


var geojson = [
	{
		type: 'Feature',
		geometry: {
			type: 'Point',
			coordinates: [-4.997862, 50.437957]
		},
		properties: {
			title: 'Newquay Airport',
			'marker-color': '#004c53',
			'marker-size': 'medium',
			'marker-symbol': 'airport'
		}
	},
	{
		type: 'Feature',
		geometry: {
			type: 'Point',
			coordinates: [-5.028229, 50.404256]
		},
		properties: {
			title: 'Quintrell Downs Train Station',
			'marker-color': '#004c53',
			'marker-size': 'medium',
			'marker-symbol': 'rail'
		}
	},
	{
		type: 'Feature',
		geometry: {
			type: 'Point',
			coordinates: [-4.944162,50.377834]
		},
		properties: {
			title: 'Premier Inn - Fraddon',
			'marker-color': '#004c53',
			'marker-size': 'medium',
			'marker-symbol': 'village'
		}
	},
	{
		type: 'Feature',
		geometry: {
			type: 'Point',
			coordinates: [-5.029169, 50.401417]
		},
		properties: {
			title: 'Premier Inn - Quintrell Downs',
			'marker-color': '#004c53',
			'marker-size': 'medium',
			'marker-symbol': 'village'
		}
		
	},
	{
		type: 'Feature',
		geometry: {
			type: 'Point',
			coordinates: [-5.042541, 50.382838]
		},
		properties: {
			title: 'The Granary',
			'marker-color': '#004c53',
			'marker-size': 'medium',
			'marker-symbol': 'village'
		}
	},
	{
		type: 'Feature',
		geometry: {
			type: 'Point',
			coordinates: [-5.069751, 50.379469]
		},
		properties: {
			title: 'The Stable Conversion',
			'marker-color': '#004c53',
			'marker-size': 'medium',
			'marker-symbol': 'village'
		}
	},
	{
		type: 'Feature',
		geometry: {
			type: 'Point',
			coordinates: [-4.983328, 50.368739]
		},
		properties: {
			title: 'Carvynick Holiday Park',
			'marker-color': '#004c53',
			'marker-size': 'medium',
			'marker-symbol': 'campsite'
		}
	},
	{
		type: 'Feature',
		geometry: {
			type: 'Point',
			coordinates: [-5.076292, 50.412975]
		},
		properties: {
			icon: {
				className: 'named-marker',
        		html: 'Newquay', 
				iconSize: [100, 20]  
			}
		}
	},
	{
		type: 'Feature',
		geometry: {
			type: 'Point',
			coordinates: [-4.969353, 50.366004]
		},
		properties: {
			icon: {
				className: 'named-marker',
        		html: 'Summercourt', 
				iconSize: [100, 20]  
			}
		}
	},
	{
		type: 'Feature',
		geometry: {
			type: 'Point',
			coordinates: [-5.110372, 50.436277]
		},
		properties: {
			'marker-color': '#004c53',
			'marker-size': 'medium',
			'marker-symbol': 'swimming'
		}
	}
];

markerLayer.on('layeradd', function(e) {
	var marker = e.layer;
	var feature = marker.feature;
  	
	if (feature.properties.icon) {
		marker.setIcon(L.divIcon(feature.properties.icon));
	}
});
markerLayer.setGeoJSON(geojson);
map.dragging.disable()
map.scrollWheelZoom.disable()
