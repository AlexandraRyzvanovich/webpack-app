import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import Footer from "./components/common/footer";
import Header from "./components/common/header";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Header />, document.getElementById("header"));
ReactDOM.render(<Footer />, document.getElementById("footer"));
