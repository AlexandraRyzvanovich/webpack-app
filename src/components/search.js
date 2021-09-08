import React from "react";
import { Component } from "react";
import PropTypes from "prop-types";

import "./../styles/search.scss";

class Search extends Component {
  render() {
    return (
      <>
        <div className="search-wrapper">
          <input
            placeholder="What do you want to watch?"
            type="input"
            className="input-search"
          ></input>
          <button
            type="submit"
            className="button-search"
            onClick={this.props.onSearch}
          >
            <p>SEARCH</p>
          </button>
        </div>
      </>
    );
  }
}

Search.propTypes = {
  onSearch: PropTypes.func,
};

export default Search;
