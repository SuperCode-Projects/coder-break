import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Head from "./Components/Head";
import StartPage from "./Components/StartPage";

import "./App.css";
function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <StartPage link="/head" />
          </Route>
          <Route path="/head">
            <Head />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
