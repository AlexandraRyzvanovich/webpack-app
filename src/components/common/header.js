import React from "react";

import Search from "./search";
import Logo from "./logo";
import "./../../styles/header.scss";
import "./../../styles/common.scss";

function Header() {
  return (
    <header class="header">
      <Logo />
      <button type="submit" className="button-add">
        <p>+ ADD MOVIE</p>
      </button>
      <Search />
    </header>
  );
}
export default Header;
