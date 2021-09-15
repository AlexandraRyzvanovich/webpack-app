import React from "react";
import "./../styles/movieListHeader.scss";

function MovieSorterComponent(props) {
  return (
    <div class="list-header">
      <div className="buttons-left-wrapper ">
        <button id="all" name="all" onClick={props.onGetFilms}>
          <p>ALL</p>
        </button>
        <button type="button" onClick={props.onGetFilms}>
          <p>DOCUMENTARY</p>
        </button>
        <button type="button" onClick={props.onGetFilms}>
          <p>COMEDY</p>
        </button>
      </div>
      <div className="buttons-rigth-wrapper">
        <button type="button" onClick={props.onGetFilms}>
          <p>SORT BY</p>
        </button>
        <button type="button" onClick={props.onGetFilms}>
          <p>RELEASE DATE</p>
        </button>
      </div>
    </div>
  );
}
export default MovieSorterComponent;
