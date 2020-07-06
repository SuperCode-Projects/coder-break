import React from "react";
import "./icons.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Arms from "./Arms";
import Head from "./Head";
import OverBody from "./OverBody";
const Icons = ({
  borderChead,
  scaleHead,
  borderCoverBody,
  borderCarm,
  scaleOverBody,
  scaleArm,
}) => {
  return (
    <>
      <BrowserRouter>
        <div className="icons">
          <Link to="/head">
            <img
              style={{
                borderColor: `${borderChead}`,
                transform: `${scaleHead}`,
              }}
              src="icons8-head-massage-area-50.png"
              alt="head"
            />
          </Link>
          <Link to="/overbody">
            <img
              style={{
                borderColor: `${borderCoverBody}`,
                transform: `${scaleOverBody}`,
              }}
              src="icons8-back-massage-area-50.png"
              alt="overBody"
            />
          </Link>
          <Link to="/arms">
            <img
              style={{
                borderColor: `${borderCarm}`,
                transform: `${scaleArm}`,
              }}
              src="icons8-arm-massage-area-50.png"
              alt="arms"
            />
          </Link>
        </div>
        {/*   <Switch>
          <Route path="/head">
            <Head />
          </Route>
          <Route path="/arms">
            <Arms />
          </Route>
          <Route path="/overbody">
            <OverBody />
          </Route>
        </Switch> */}
      </BrowserRouter>
    </>
  );
};

export default Icons;
