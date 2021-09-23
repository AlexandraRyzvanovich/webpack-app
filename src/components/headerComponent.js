import React from "react";

import PropTypes from "prop-types";

import SearchComponent from "./searchComponent";
import LogoComponent from "./logoComponent";

function HeaderComponent(props) {
  const { onOpen, onSearch } = props;
  return (
    <>
      <header className="header">
        <LogoComponent />
        <button type="submit" className="button-add" onClick={onOpen}>
          <p>+ ADD MOVIE</p>
        </button>
        <SearchComponent onSearch={onSearch} />
      </header>
    </>
  );
}

HeaderComponent.propTypes = {
  onOpen: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default HeaderComponent;
