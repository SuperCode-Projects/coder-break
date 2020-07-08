import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Head from "./Components/Head";
import Signin from "./Components/Signin";
import BackgroundVideo from "./Components/video/vediostreet.mp4";

import "./App.css";
function App() {
  return (
    <div className="body">
      <video id="backgroundVideo" autoPlay loop muted>
        <source src={BackgroundVideo} type="video/mp4" />
      </video>

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Signin link="/head" />
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
