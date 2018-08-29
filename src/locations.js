module.exports = {
	townLocations: [
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-5.076292, 50.412975]
			},
			properties: {
				icon: {
					className: 'map__marker',
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
					className: 'map__marker',
        			html: 'Summercourt', 
					iconSize: [100, 20]  
				}
			}
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-5.050733, 50.262576]
			},
			properties: {
				icon: {
					className: 'map__marker',
        			html: 'Truro', 
					iconSize: [100, 20]  
				}
			}
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-5.480473, 50.213783]
			},
			properties: {
				icon: {
					className: 'map__marker',
        			html: 'St. Ives', 
					iconSize: [100, 20]  
				}
			}
		},
		{
			type: 'Feature',
			geometry: {
				type: 'Point',
				coordinates: [-4.465020, 50.454405]
			},
			properties: {
				icon: {
					className: 'map__marker',
        			html: 'Liskeard', 
					iconSize: [100, 20]  
				}
			}
		}	
	],
	accommodationLocations: [
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
		}
	], 
	pointsOfInterest: [
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
				coordinates: [-5.110372, 50.436277]
			},
			properties: {
				'marker-color': '#004c53',
				'marker-size': 'medium',
				'marker-symbol': 'swimming'
			}
		}
	]
}
