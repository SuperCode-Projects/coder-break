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

      side: "up",
    };
  }

  getPoses = (poses) => {
    if (!poses[0] || !poses[0].keypoints) {
      return;
    }
    const lWrist = poses[0].keypoints[9];
    const rWrist = poses[0].keypoints[10];
    const lElbow = poses[0].keypoints[7];
    const rElbow = poses[0].keypoints[8];
    const audio = document.querySelector("#audio");
    const relaxMusic = document.querySelector("#relaxMusic");

    if (this.state.count < 1) {
      audio.play();
    } else {
      audio.pause();
    }

    if (this.state.count > 1) {
      relaxMusic.play();
    } else {
      relaxMusic.pause();
    }

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
            this.setState({ side: "down" });
          }
        } else {
          if (
            lElbow.position.y + 30 < lWrist.position.y ||
            rElbow.position.y + 30 < rWrist.position.y
          ) {
            this.setState({ count: this.state.count - 1, side: "up" });
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
                count={this.state.count > 0 ? `${this.state.count}` : "✔"}
                countColor={this.state.count < 1 ? "green" : ""}
                einDisplay={" none"}
                ausDisplay={"none"}
              />
              <Icons
                borderCarm={this.state.count < 1 ? "green" : "transparent"}
                overbodyLink="/overbody"
                headLink="/head"
                armsDispla="block"
                headDisplay={this.state.count > 0 ? "none" : "block"}
                overbodyDisplay={this.state.count > 0 ? "none" : "block"}
              />
              <audio src="end.mp3" id="audio"></audio>
              <audio
                src="2020-02-22_-_Relaxing_Green_Nature_-_David_Fesliyan.mp3"
                id="relaxMusic"
              ></audio>
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
