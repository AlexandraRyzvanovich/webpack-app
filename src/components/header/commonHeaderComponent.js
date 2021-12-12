import React from "react";

import PropTypes from "prop-types";

import SearchComponent from "./searchComponent";
import LogoComponent from "./logoComponent";

function CommonHeader(props) {
  return (
    <>
      <header className="header">
        <LogoComponent />
        <button type="submit" className="button-add" onClick={props.onOpen}>
          <p>+ ADD MOVIE</p>
        </button>
        <SearchComponent />
      </header>
    </>
  );
}

CommonHeader.propTypes = {
  onOpen: PropTypes.func.isRequired,
  onOpenSearch: PropTypes.func,
};

export default CommonHeader;
