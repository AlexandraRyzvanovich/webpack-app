import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from "react-router-dom";
import "./../styles/app.scss";
import ErrorBoundary from "./errorBoundary";
import FooterComponent from "./footerComponent";
import MovieAppContainer from "./movieAppContainer";

import "./../styles/header.scss";
import "./../styles/common.scss";
import "./../styles/popup.scss";
import "./../styles/movie.scss";
import "./../styles/infoHeader.scss";
import movieSorterComponent from "./movieSorterComponent";
import searchComponent from "./header/searchComponent";
import MovieComponent from "./movieComponent";

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <MovieAppContainer />
        <FooterComponent />
        <Switch>
          <Route path="/movies/sort/:type" component={movieSorterComponent} />
        </Switch>
        <Switch>
          <Route
            path={"/movies/search/:titleParam"}
            component={searchComponent}
          />
        </Switch>
        <Switch>
          <Route path={"/movies/info/:idParam"} component={MovieComponent} />
        </Switch>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
