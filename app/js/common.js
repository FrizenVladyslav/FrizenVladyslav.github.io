$(function() {



});
function initMap() {
	var uluru = {lat: 52.407781, lng: 16.901478};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}