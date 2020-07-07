import React, { Component } from "react";
import Icons from "./Icons";
import PoseNet from "react-posenet";
import Counter from "./Counter";
import "./homepage.css";
import Head from "./Head";
import OverBody from "./OverBody";
import { BrowserRouter, Switch, Route } from "react-router-dom";
class Arms extends Component {
  constructor() {
    super();
    this.state = {
      count: 10,
      position: "",
      side: "up",
    };
  }

  getPoses = (poses) => {
    if (!poses[0] || !poses[0].keypoints) {
      return;
    }
    this.setState({ position: poses[0].keypoints[0].position });
    const lWrist = poses[0].keypoints[9];
    const rWrist = poses[0].keypoints[10];
    const lElbow = poses[0].keypoints[7];
    const rElbow = poses[0].keypoints[8];

    if (this.state.count > 0) {
      if (
        lWrist &&
        lElbow &&
        rWrist &&
        rElbow &&
        lWrist.position &&
        lElbow.position &&
        rWrist.position &&
        rElbow.position
      ) {
        if (this.state.side === "up") {
          if (
            lElbow.position.y - 30 > lWrist.position.y ||
            rElbow.position.y - 30 > rWrist.position.y
          ) {
            this.setState({ count: this.state.count - 1, side: "down" });
          }
        } else {
          if (
            lElbow.position.y + 30 < lWrist.position.y ||
            rElbow.position.y + 30 < rWrist.position.y
          ) {
            this.setState({ side: "up" });
          }
        }
      }
    }
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/arms">
            <>
              <PoseNet onEstimate={this.getPoses} className="posenet" />
              <Counter
                countStyle={this.state.count == 0 ? "none" : "block"}
                count={this.state.count}
              />
              <Icons
                borderCarm={this.state.count < 1 ? "green" : "yellow"}
                scaleArm={this.state.count < 1 ? `scale(1.5,1.5)` : ``}
                overbodyLink="/overbody"
                headLink="/head"
              />
              <div id="circles">
                <div
                  src="bat-wing.svg"
                  id="circleIn"
                  style={{ left: `${this.state.position.x}px` }}
                ></div>
                <div
                  id="circleOut"
                  style={{ left: this.state.side === "left" ? "16vw" : "10vw" }}
                ></div>
              </div>
            </>
          </Route>
          <Route path="/head">
            <Head />
          </Route>
          <Route path="/overbody">
            <OverBody />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Arms;
