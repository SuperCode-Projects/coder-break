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
      countL: 10,
      countR: 10,

      side: "left",
    };
  }

  getPoses = (poses) => {
    if (!poses[0] || !poses[0].keypoints) {
      return;
    }
    const counterId = document.querySelector("#counter");
    const lEyeY = poses[0].keypoints[1].position.y;
    const rEyeY = poses[0].keypoints[2].position.y;

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
      if (lEyeY && rEyeY) {
        if (this.state.side === "left") {
          if (lEyeY - 30 > rEyeY) {
            counterId.classList.add("counterAnimation");
            this.setState({ countL: this.state.count - 1, side: "right" });
          }
        } else {
          if (lEyeY + 30 < rEyeY) {
            counterId.classList.add("counterAnimation");
            this.setState({ countR: this.state.count - 1, side: "left" });

            counterId.classList.remove("counterAnimation");
          }

          if (
            this.state.countL < 10 &&
            this.state.countL == this.state.countR
          ) {
            this.setState({ count: this.state.count - 1 });
          }
        }
      }
    }
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/head">
            <>
              <PoseNet onEstimate={this.getPoses} className="posenet" />
              <Counter
                count={this.state.count > 0 ? `${this.state.count}` : "✔"}
                countColor={this.state.count < 1 ? "green" : ""}
                einDisplay={
                  this.state.side == "right"
                    ? "none"
                    : this.state.count < 1
                    ? "none"
                    : ""
                }
                ausDisplay={this.state.side == "left" ? "none" : "block"}
              />
              <Icons
                borderChead={this.state.count < 1 ? "green" : "transparent"}
                scaleHead={this.state.count < 1 ? `scale(1.2,1.2)` : ``}
                overbodyLink="/overbody"
                armLink="/arms"
                headDispla="block"
                overbodyDisplay={this.state.count > 0 ? "none" : "block"}
                armsDisplay={this.state.count > 0 ? "none" : "block"}
              />
              <audio src="end.mp3" id="audio"></audio>
              <audio
                src="2020-02-22_-_Relaxing_Green_Nature_-_David_Fesliyan.mp3"
                id="relaxMusic"
              ></audio>
            </>
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
