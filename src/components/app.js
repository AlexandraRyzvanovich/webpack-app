import React, { Component } from "react";
import { Fragment } from "react";

import "./../styles/app.scss";
import ErrorBoundary from "./common/errorBoundary";
import HomePage from "./homePage";
import Header from "./common/header";
import Footer from "./common/footer";

class App extends Component {
  render() {
    return (
      <ErrorBoundary>
        <Header />
        <HomePage />
        <Footer />
      </ErrorBoundary>
    );
  }
}

export default App;
