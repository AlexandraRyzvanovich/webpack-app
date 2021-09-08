import React, { Component } from "react";

import "./../styles/app.scss";
import ErrorBoundary from "./errorBoundary";
import Footer from "./footer";
import MovieAppContainer from "./movieAppContainer";

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <MovieAppContainer />
        <Footer />
      </ErrorBoundary>
    );
  }
}

export default App;
