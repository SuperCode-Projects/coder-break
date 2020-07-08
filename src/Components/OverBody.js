import React, { Component } from "react";
import Icons from "./Icons";
import PoseNet from "react-posenet";
import Counter from "./Counter";
import Head from "./Head";
import Arms from "./Arms";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./homepage.css";
class OverBody extends Component {
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

    const nose = poses[0].keypoints[0].position;

    if (this.state.count > 0) {
      if (nose) {
        if (this.state.side === "left") {
          if (nose.x > 380) {
            this.setState({ count: this.state.count - 1, side: "right" });
          }
        } else {
          if (nose.x < 135) {
            this.setState({ count: this.state.count - 1, side: "left" });
          }
        }
      }
    }
    this.setState({ position: poses[0].keypoints[0].position });
    console.log(nose.x);
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/overbody">
            <>
              <PoseNet onEstimate={this.getPoses} className="posenet" />
              <Counter count={this.state.count} />
              <Icons
                borderCoverBody={this.state.count < 1 ? "green" : "yellow"}
                scaleOverBody={this.state.count < 1 ? `scale(1.5,1.5)` : ``}
                armLink="/arms"
                headLink="/head"
              />
            </>
          </Route>
          <Route path="/arms">
            <Arms />
          </Route>
          <Route path="/head">
            <Head />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default OverBody;
