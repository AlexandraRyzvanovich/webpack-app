import React from "react";
import { Component } from "react";

import PropTypes from "prop-types";

import "./../styles/header.scss";
import "./../styles/common.scss";

import Search from "./search";
import Logo from "./logo";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <header class="header">
          <Logo />
          <button
            type="submit"
            className="button-add"
            onClick={this.props.onOpen}
          >
            <p>+ ADD MOVIE</p>
          </button>
          <Search onClick={this.props.onSearch} />
        </header>
      </>
    );
  }
}

Header.propTypes = {
  onAdd: PropTypes.func,
  onSearch: PropTypes.func,
  onOpen: PropTypes.func,
};

export default Header;
