import React, { Component } from "react";
import Icons from "./Icons";
import PoseNet from "react-posenet";
import Counter from "./Counter";

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

    const lEye = poses[0].keypoints[1].position;
    const rEye = poses[0].keypoints[2].position;

    if (this.state.count > 0) {
      if (lEye && rEye) {
        if (this.state.side === "left") {
          if (lEye.y - 30 > rEye.y) {
            this.setState({ count: this.state.count - 1, side: "right" });
          }
        } else {
          if (lEye.y + 30 < rEye.y) {
            this.setState({ count: this.state.count - 1, side: "left" });
          }
        }
      }
    }
    this.setState({ position: poses[0].keypoints[0].position });
  };

  render() {
    return (
      <>
        <PoseNet onEstimate={this.getPoses} className="posenet" />
        <Counter
          countStyle={this.state.count == 0 ? "none" : "block"}
          count={this.state.count}
        />
        <Icons
          borderChead={this.state.count < 1 ? "green" : "yellow"}
          scaleHead={this.state.count < 1 ? `scale(1.5,1.5)` : ``}
        />
        <div id="circles">
          <div
            id="circleIn"
            style={{ left: `${this.state.position.x}px` }}
          ></div>
          <div
            id="circleOut"
            style={{ left: this.state.side === "left" ? "16vw" : "10vw" }}
          ></div>
        </div>
      </>
    );
  }
}

export default Head;
