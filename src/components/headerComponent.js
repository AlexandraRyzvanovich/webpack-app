import React from "react";
import { Component } from "react";

import PropTypes from "prop-types";

import "./../styles/header.scss";
import "./../styles/common.scss";

import SearchComponent from "./searchComponent";
import LogoComponent from "./logoComponent";

class HeaderComponent extends Component {
  render() {
    if (!this.props.isMovieOpened) {
      return (
        <>
          <header class="header">
            <LogoComponent />
            <button
              type="submit"
              className="button-add"
              onClick={this.props.onOpen}
            >
              <p>+ ADD MOVIE</p>
            </button>
            <SearchComponent onSearch={this.props.onSearch} />
          </header>
        </>
      );
    }
    return null;
  }
}

HeaderComponent.propTypes = {
  onAdd: PropTypes.func,
  onSearch: PropTypes.func,
  onOpen: PropTypes.func,
  isMovieOpened: PropTypes.bool,
};

export default HeaderComponent;
