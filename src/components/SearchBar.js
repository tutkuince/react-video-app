import React from "react";

class SearchBar extends React.Component {
    // term is short for search term
    state = {term: ''};

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        // TODO: Make sure we call callback from parent component
    };

    render() {
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="searchInput">Video Search</label>
                        <input
                            type="text"
                            id="searchInput"
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;