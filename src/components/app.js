import React, { Component } from "react";

import "./../styles/app.scss";
import ErrorBoundary from "./errorBoundary";
import FooterComponent from "./footerComponent";
import MovieAppContainer from "./movieAppContainer";

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <MovieAppContainer />
        <FooterComponent />
      </ErrorBoundary>
    );
  }
}

export default App;
