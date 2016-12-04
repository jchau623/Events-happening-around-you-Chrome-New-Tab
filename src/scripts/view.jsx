var React = require('react');
var ReactDOM = require('react-dom');
require('./main.js')();

class Container extends React.Component {
	render() {
		return (
			<LocationAndSearchBar />
		);
	}
}

class LocationAndSearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loadingLocation: true, 
			location: "placeholder"
		};
	};

	componentWillMount() {
		getUserLocation.call(this);
	}
	render() {
		var location;
		if (this.state.loadingLocation) {
			location = "Getting location...";
		} else {
			location = this.state.location;
		}
		return (
			<div className="locationAndSearchBarContainer">
				Your location: {location} (Change)
				<SearchBar />
			</div>
		);

	}
}

class SearchBar extends React.Component {
	render() {
		return (
			<input className="searchBar" id="locationSearchBar" />
		);
	}
}

ReactDOM.render(
	<Container />,
	document.getElementById('container')
);