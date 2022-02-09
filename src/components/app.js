import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

function App() {
  return (
    <Router basename="/app">
    <ErrorBoundary>
      <MovieAppContainer />
      <FooterComponent />
      <Switch>
          <Route path="/app/documentary" component={movieSorterComponent}/>
        </Switch>
    </ErrorBoundary>
    </Router>
  );
}

export default App;
