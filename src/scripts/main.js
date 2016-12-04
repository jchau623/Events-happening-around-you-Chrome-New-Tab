require('./utils.js')();
var $ = require("jquery");

module.exports = function() {
    this.getUserLocation = function() {
        var userLocation = getCookieInfo(userLocation);
        if (!userLocation) {
            setUserLocation().then(
                function(oData) {
                    var sLocation = "";
                    if (oData) {
                        if (oData.city) {
                            sLocation += oData.city + ", ";
                        }
                        if (oData.region) {
                            sLocation += oData.region;
                        } else if (oData.country) {
                            sLocation += oData.region.country;
                        }
                    } else {
                        sLocation = "Vancouver, BC";
                    }
                    this.setState({location: sLocation});
                    this.setState({loadingLocation: false});
                }.bind(this));
        } else {
            return userLocation;
        }
    }
}

function setUserLocation() {
    return $.getJSON('https://ipinfo.io/json', function(data) {
        return data;
    })
    .fail(function() {
        return null;
    });
}