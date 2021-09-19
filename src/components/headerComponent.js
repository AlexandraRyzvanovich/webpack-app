import React from "react";

import "./../styles/header.scss";
import "./../styles/common.scss";

import SearchComponent from "./searchComponent";
import LogoComponent from "./logoComponent";

function HeaderComponent(props) {
  return (
    <>
      <header class="header">
        <LogoComponent />
        <button type="submit" className="button-add" onClick={props.onOpen}>
          <p>+ ADD MOVIE</p>
        </button>
        <SearchComponent onSearch={props.onSearch} />
      </header>
    </>
  );
}

export default HeaderComponent;
