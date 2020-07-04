import React, { Component } from "react";
import PoseNet from "react-posenet";
import Counter from "./Counter";
import Icons from "./Icons";
import "./homepage.css";
import Signin from "./Signin";
import { BrowserRouter, Switch, Route } from "react-router-dom";

console.log(PoseNet);
class Homepage extends Component {
  constructor() {
    super();
    this.state = { count: 0, position: "" };
  }
  getPoses = (poses) => {
    /* console.log(poses[0].keypoints[0].position.x); */
    console.log(poses[0].keypoints[3].position.y);
    if (poses[0].keypoints[3].position.y > 273) {
      console.log("left");
      this.setState({ count: this.state.count + 1 });
    }
    this.setState({ position: poses[0].keypoints[3].position });
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
                      left: `${this.state.position.x}px `,
                    }}
                  ></div>
                  <div
                    id="circleOut"
                    style={{
                      left: `${this.state.position.x}px `,
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
