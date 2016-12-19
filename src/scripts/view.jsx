var React = require('react');
var ReactDOM = require('react-dom');
require('react-autosuggest');
require('./main.js')();

class Container extends React.Component {
	render() {
		return (
			<LocationAndSearchBar />
		);
	}
}

class LocationAndSearchBar extends React.Component {
	constructor() {
		super();
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
				<SearchBar id="changeLocationSearchBar"/>
			</div>
		);

	}
}

class SearchBar extends React.Component {
	constructor() {
		super();
		setUpSearchBar();
		this.state = {
			value: '',
			suggestions: [],
			loading: false
		}
	}
	render() {
		return (
			<Autosuggest 	className = "searchBar googleSearchAutoComplete" 
							id = {this.props.id} 
							// onChange = {showHint}
							suggestions = {suggestions}
							onSuggestionsFetchRequested = 
							alwaysRenderSuggestions = {true}
							getSuggestionValue =
							renderSuggestion =
							inputProps = />
		);
	}
}

ReactDOM.render(
	<Container />,
	document.getElementById('container')
);