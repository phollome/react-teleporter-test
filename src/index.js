import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import { StatusBar } from "./StatusBar";
import { BrowserRouter, Route } from "react-router-dom";
import Page from "./Page";
import SubPage from "./SubPage";

function App() {
  return (
    <div className="App">
      <StatusBar />
      <BrowserRouter>
        <Route path="/" exact component={Page} />
        <Route path="/subpage" exact component={SubPage} />
      </BrowserRouter>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
