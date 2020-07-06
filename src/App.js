import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Arms from "./Components/Arms";
import Head from "./Components/Head";
import OverBody from "./Components/OverBody";
import Signin from "./Components/Signin";
import "./App.css";
function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Signin link="/overbody" />
          </Route>
          <Route path="/head">
            <Head />
          </Route>
          <Route path="/arms">
            <Arms />
          </Route>
          <Route path="/overbody">
            <OverBody />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
