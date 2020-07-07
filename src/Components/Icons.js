import React from "react";
import "./icons.css";
import { Link } from "react-router-dom";
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
  headLink,
  overbodyLink,
  armLink,
}) => {
  return (
    <>
      <div className="icons">
        <Link to={headLink}>
          <img
            style={{
              borderColor: `${borderChead}`,
              transform: `${scaleHead}`,
            }}
            src="icons8-head-massage-area-50.png"
            alt="head"
          />
        </Link>
        <Link to={overbodyLink}>
          <img
            style={{
              borderColor: `${borderCoverBody}`,
              transform: `${scaleOverBody}`,
            }}
            src="icons8-back-massage-area-50.png"
            alt="overBody"
          />
        </Link>
        <Link to={armLink}>
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
    </>
  );
};

export default Icons;
