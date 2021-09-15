import React, { Component } from "react";

import "./../styles/header.scss";
import "./../styles/common.scss";

import LogoComponent from "./logoComponent.js";

function MovieInfoHeader(props) {
  if (props.isOpened) {
    return (
      <header class="header">
        <LogoComponent />
        <div className="search-icon"></div>
        <div>
          <img src={props.movieUrl}></img>
        </div>
        <div className="movie-info-wrapper">
          <div>
            <div>{props.movieName}</div>
            <div>{props.movieRating}</div>
          </div>
          <div>
            <div>{props.comment}</div>
          </div>
          <div>
            <div>{props.year}</div>
            <div>{props.length}</div>
          </div>
          <div>
            <div>{props.description}</div>
          </div>
        </div>
      </header>
    );
  } else null;
}
export default MovieInfoHeader;
