require('./utils.js')();
var $ = require('jquery');
var gMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyCEVaRhEVcMCD0GLoSn_a1LaSAh7z3htIw'
});

module.exports = function() {
    this.getUserLocation = function() {
        _getUserLocation.call(this);
    }
    this.setUpSearchBar = function() {
        _setUpSearchBar.call(this);
    }
    this.showHint = function(e) {
        _showHint(e.target.value);
    }
}

// exported function definitions //

function _getUserLocation() {
    var userLocation = getCookieInfo("userLocation");
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
                    document.cookie = "userLocation=" + sLocation;
                } else {
                    sLocation = "Vancouver, BC";
                }
                this.setState({location: sLocation});
                this.setState({loadingLocation: false});
            }.bind(this));
    } else {
        this.setState({location: userLocation});
        this.setState({loadingLocation: false});        
    }
}

function _setUpSearchBar() {
    _showHint = require('throttle-debounce').debounce(300, _showHint);
}

function _showHint(value) {
    console.log(value);
    gMapsClient.placesAutoComplete({
        input: value,
        language: 'en'
    }, function(err, response) {
        if (!err) {
            console.log(response.json);
        }
    })
}



// private functions //

function setUserLocation() {
    return $.getJSON('https://ipinfo.io/json', function(data) {
        return data;
    })
    .fail(function() {
        return null;
    });
}

