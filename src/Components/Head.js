import React, { Component } from "react";
import Icons from "./Icons";
import PoseNet from "react-posenet";
import Counter from "./Counter";
import Arms from "./Arms";
import OverBody from "./OverBody";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./homepage.css";
class Head extends Component {
  constructor() {
    super();
    this.state = {
      count: 10,
      position: "",
      side: "left",
    };
  }

  getPoses = (poses) => {
    if (!poses[0] || !poses[0].keypoints) {
      return;
    }
    const counterId = document.querySelector("#counter");
    const lEye = poses[0].keypoints[1].position;
    const rEye = poses[0].keypoints[2].position;
    const lEyeX = poses[0].keypoints[1].position.x;
    const rEyeX = poses[0].keypoints[2].position.x;
    const lEyeY = poses[0].keypoints[1].position.y;
    const rEyeY = poses[0].keypoints[2].position.y;
    const a = Math.round(rEyeX - lEyeX);
    const b = Math.round(rEyeY - lEyeY);
    if (a == b) {
      console.log("hier");
    }

    console.log("a" + a);
    console.log("b" + b);
    if (this.state.count > 0) {
      if (lEye && rEye) {
        if (this.state.side === "left") {
          if (lEye.y - 30 > rEye.y) {
            counterId.classList.add("counterAnimation");
            this.setState({ count: this.state.count - 1, side: "right" });
          }
        } else {
          if (lEye.y + 30 < rEye.y) {
            counterId.classList.add("counterAnimation");
            this.setState({ count: this.state.count - 1, side: "left" });

            counterId.classList.remove("counterAnimation");
          }
        }
      }
    }
    this.setState({ position: poses[0].keypoints[0].position });
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/head">
            <>
              <PoseNet onEstimate={this.getPoses} className="posenet" />
              <Counter
                count={
                  this.state.count > 0 ? `${this.state.count}` : "Nice Job"
                }
                countColor={this.state.count < 1 ? "green" : ""}
              />
              <Icons
                borderChead={this.state.count < 1 ? "green" : "yellow"}
                scaleHead={this.state.count < 1 ? `scale(1.5,1.5)` : ``}
                overbodyLink="/overbody"
                armLink="/arms"
              />
            </>
            <img
              style={{ display: `${this.state.count}` < 1 ? "none" : "block" }}
              id="headImg"
              src="unnamed.png"
            />
            <img
              style={{ display: `${this.state.count}` < 1 ? "block" : "none" }}
              id="headImg"
              src="6Smt.gif"
            />
          </Route>
          <Route path="/arms">
            <Arms />
          </Route>
          <Route path="/overbody">
            <OverBody />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Head;
