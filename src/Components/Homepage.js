import React, { Component } from "react";
import PoseNet from "react-posenet";
import Counter from "./Counter";
import Icons from "./Icons";
import "./homepage.css";
import Signin from "./Signin";

import { BrowserRouter, Switch, Route } from "react-router-dom";
class Homepage extends Component {
  constructor() {
    super();
    this.state = { count: 0, position: "" };
  }
  getPoses = (poses) => {
    if (!poses[0] || !poses[0].keypoints) {
      return;
    }
    const lEye = poses[0].keypoints[1].position;
    const rEye = poses[0].keypoints[2].position;

    if (lEye.y > rEye.y) {
      console.log("left");
      this.setState({ count: this.state.count + 1 });
    }
    if (this.state.count > 10) {
      this.setState({ count: 10 });
    }

    /*  const rEar = poses[0].keypoints[4].position;
      
    const rShoulder = poses[0].keypoints[6].position;
    if ((rEar.y = rShoulder.y)) {
      console.log("right");
      this.setState({ count: this.state.count + 1 });
    }
    if (this.state.count > 10) {
      this.setState({ count: 10 });
    } */

    console.log(lEye.y);
    this.setState({ position: poses[0].keypoints[0].position });
  };

  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Signin link="/start" />
            </Route>
            <Route path="/start">
              <div>
                <PoseNet onEstimate={this.getPoses} className="posenet" />
                <Counter count={this.state.count} />
                <Icons bC={this.state.count >= 10 ? "green" : "white"} />
                <div id="circles">
                  <div
                    id="circleIn"
                    style={{
                      left: `${this.state.position.x}px`,
                    }}
                  ></div>
                  <div
                    id="circleOut"
                    style={{
                      left: `${this.state.position.y}px`,
                    }}
                  ></div>
                </div>
              </div>
            </Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default Homepage;
