import React from "react";
import { connect } from "react-redux";
import { useCallback } from "react";

import {
  searchByGenre,
  sortAllByReleaseDateASC,
  sortAllByReleaseDateDESC,
  sortAllByField,
  fetchAll,
} from "../store/reducers/movies/moviesActions";

import "./../styles/movieListHeader.scss";

function MovieSorterComponent({
  searchByGenre,
  sortAllByReleaseDateASC,
  sortAllByReleaseDateDESC,
  sortAllByField,
  fetchAll,
}) {
  const handleSearchByDocumentory = useCallback(() => {
    searchByGenre("documentary");
  }, []);

  const handleSearchByComedy = useCallback(() => {
    searchByGenre("comedy");
  }, []);

  const handleFetchAll = useCallback(() => {
    fetchAll();
  }, []);

  const handleFetchByReleaseDateASC = useCallback(() => {
    sortAllByReleaseDateASC();
  }, []);
  const handleFetchByReleaseDateDESC = useCallback(() => {
    sortAllByReleaseDateDESC();
  }, []);

  return (
    <div className="list-header">
      <div className="buttons-left-wrapper ">
        <button id="all" name="all" onClick={handleFetchAll}>
          <p>ALL</p>
        </button>
        <button type="button" onClick={handleSearchByDocumentory}>
          <p>DOCUMENTARY</p>
        </button>
        <button type="button" onClick={handleSearchByComedy}>
          <p>COMEDY</p>
        </button>
      </div>
      <div className="buttons-rigth-wrapper">
        <button type="button">
          <p>SORT BY</p>
        </button>
        <div className="dropdown-sort">
          <button
            className="dropbtnselect"
            onClick={handleFetchByReleaseDateASC}
          >
            <p> RELEASE DATE ASC</p>
          </button>
          <div className="dropdown-content-sort">
            <p className="cursor-p" onClick={handleFetchByReleaseDateDESC}>
              RELEASE DATE DESC
            </p>
            <p
              className="cursor-p"
              onClick={() => {
                sortAllByField("title");
              }}
            >
              TITLE
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps, {
  sortAllByReleaseDateASC,
  sortAllByReleaseDateDESC,
  sortAllByField,
  searchByGenre,
  fetchAll,
})(MovieSorterComponent);
