import React from "react";

import "./../styles/app.scss";
import ErrorBoundary from "./errorBoundary";
import FooterComponent from "./footerComponent";
import MovieAppContainer from "./movieAppContainer";

import "./../styles/header.scss";
import "./../styles/common.scss";
import "./../styles/popup.scss";
import "./../styles/movie.scss";
import "./../styles/infoHeader.scss";

function App() {
  return (
    <ErrorBoundary>
      <MovieAppContainer />
      <FooterComponent />
    </ErrorBoundary>
  );
}

export default App;
