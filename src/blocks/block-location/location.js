ymaps.ready(init);
 
function init(){     

	var myMap;

	myMap = new ymaps.Map("map", {
		center: [37.795454, -122.414885],
		zoom: 15,
		controls: []
	}, {
		balloonPanelMaxMapArea: Infinity
	});

	myMap.behaviors.disable('scrollZoom');

	var myPlacemark = new ymaps.Placemark([37.795454, -122.414885] , {
	}, { 
		iconLayout: 'default#image',
		iconImageHref: 'assets/img/location-marker.png',
		iconImageSize: [115, 117],
		iconImageOffset: [-39, -117] 
	});     

	myMap.geoObjects.add(myPlacemark);

	var html = 	'<div class="location__balloon">';
			html += 	'<h3 class="location__text">Meet us!</h3>';
			html += 	'<p class="location__adress">1259  CALIFORNIA ST San Francisco, CA</p>';
			html += 	'<svg class="location__my-location-icon icon">';
			html += 		'<use xlink:href="assets/img/location-icon-my-location.svg#location-icon-my-location"></use>';
			html += 	'</svg>';
			html += 	'<svg class="location__pin-icon icon">';
			html += 		'<use xlink:href="assets/img/location-icon-pin.svg#location-icon-pin"></use>';
			html += 	'</svg>';
			html += '</div>';

	myMap.balloon.open([37.795454, -122.414885], html, {
    // Опция: не показываем кнопку закрытия.
    closeButton: false
  });
}
			