function initMap() {
	L.mapquest.key = 'SDTHUpD2FgR1fgCRXAABUAce7Q9AdHrT';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	// Add marker to map
	L.marker([32.88, -117.236]).addTo(map);
}