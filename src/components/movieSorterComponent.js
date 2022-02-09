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
import { Link, useRouteMatch } from "react-router-dom";

function MovieSorterComponent({
  searchByGenre,
  sortAllByReleaseDateASC,
  sortAllByReleaseDateDESC,
  sortAllByField,
  fetchAll,
}) {
  const handleSearchByDocumentary = useCallback(() => {
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

  const { path, url } = useRouteMatch();

  return (
    <div className="list-header">
      <div className="buttons-left-wrapper ">
        <button id="all" name="all">
          <Link to={`${path}`} onClick={handleFetchAll}>
            <p>ALL</p>
          </Link>
        </button>
        <button type="button">
          <Link to={`${path}documentary`} onClick={handleSearchByDocumentary}>
            <p>DOCUMENTARY</p>
          </Link>
        </button>
        <button type="button">
          <Link to={`${path}comedy`} onClick={handleSearchByComedy}>
            <p>COMEDY</p>
          </Link>
        </button>
      </div>
      <div className="buttons-rigth-wrapper">
        <button type="button">
          <p>SORT BY</p>
        </button>
        <div className="dropdown-sort">
          <button className="dropbtnselect">
            <Link
              to={`${path}releasedateASC`}
              onClick={handleFetchByReleaseDateASC}
            >
              <p>RELEASE DATE ASC</p>
            </Link>
          </button>
          <div className="dropdown-content-sort">
            <p className="cursor-p">
              <Link
                to={`${path}releasedateDESC`}
                onClick={handleFetchByReleaseDateDESC}
              >
                <p> RELEASE DATE DESC</p>
              </Link>
            </p>
            <p className="cursor-p">
              <Link
                to={`${path}title`}
                onClick={() => {
                  sortAllByField("title");
                }}
              >
                <p> TITLE</p>
              </Link>
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
