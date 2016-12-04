"use strict";
var React = require('react');
var ReactDOM = require('react-dom');
require('./main.js')();

class Container extends React.Component {
	render() {
		return (
			<div className="locationAndSearchBarContainer">
				Your location: {getUserLocation()} (Change)
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