let latitude = 12.9716, longitude = 77.5946;

// Initializing Mapbox
mapboxgl.accessToken="pk.eyJ1Ijoic2hpdmEwMSIsImEiOiJja3cwc3RlNDliOWI3MzFxd3VqcWg5YTJ1In0.LNNlhWH8D3qlEMSg6bvlRQ";

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [longitude, latitude],
	zoom: 5
});

map.addControl(
	new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl
	})
);


var img1 = document.querySelector("#mysore")
var marker1 = new mapboxgl.Marker({
	element: img1
})
	.setLngLat([76.655175, 12.305160])
	.addTo(map);

var img2 = document.querySelector("#charminar")
var marker2 = new mapboxgl.Marker({
	element: img2
})
	.setLngLat([78.474428, 17.361336])
	.addTo(map);

var img3 = document.querySelector("#bhima")
var marker3 = new mapboxgl.Marker({
	element: img3
})
	.setLngLat([80.1897465, 12.608710])
	.addTo(map);