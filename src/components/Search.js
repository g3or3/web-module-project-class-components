import React from "react";

class Search extends React.Component {
	constructor() {
		super();
		this.state = { searchValue: "" };
	}

	submitSearch = () => {
		this.props.search(this.state.searchValue);
		this.setState({ searchValue: "" });
	};

	render() {
		return (
			<div>
				<input
					value={this.state.searchValue}
					onChange={(evt) => {
						this.setState({ searchValue: evt.target.value });
					}}
					placeholder="search:"
					style={{ marginTop: "3%", marginBottom: "3%" }}
				/>
				<button onClick={this.submitSearch}>Search</button>
				<button onClick={this.props.clearSearch}>Clear Searches</button>
			</div>
		);
	}
}

export default Search;
