class Container extends React.Component {
	render() {
		return (
			<div className="locationSearchBarContainer">
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