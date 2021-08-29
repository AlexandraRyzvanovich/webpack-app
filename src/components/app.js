import React, { Component } from "react";
import { Fragment } from "react";

import "./../styles/app.scss";
import ErrorBoundary from "./common/errorBoundary";
import HomePage from "./homePage";

class App extends Component {
  render() {
    return (
      <Fragment>
        <ErrorBoundary>
          <HomePage />
        </ErrorBoundary>
      </Fragment>
    );
  }
}

export default App;
