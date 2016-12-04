require('./utils.js')();

module.exports = function() {
	this.getUserLocation = function() {
		var userLocation = getCookieInfo(userLocation);
		if (!userLocation) {
			userLocation = setUserLocation();
		}
		return userLocation;
	}
}

function setUserLocation() {
	if (navigator.geolocation) {

	}
}