import React from "react";
import "./icons.css";
import { Link } from "react-router-dom";

const Icons = ({
  borderChead,

  borderCoverBody,
  borderCarm,

  headLink,
  overbodyLink,
  armLink,
  armsDisplay,
  headDisplay,
  overbodyDisplay,
}) => {
  return (
    <>
      <div className="icons">
        <Link to={headLink}>
          <img
            style={{
              borderColor: `${borderChead}`,

              display: `${headDisplay}`,
            }}
            src="Figur-Kopf-Anim.gif"
            alt="head"
          />
        </Link>
        <Link to={overbodyLink}>
          <img
            style={{
              borderColor: `${borderCoverBody}`,

              display: `${overbodyDisplay}`,
            }}
            id="overBodyImg"
            src="Figur-oberkörper-Anim.gif"
            alt="overBody"
          />
        </Link>
        <Link to={armLink}>
          <img
            id="armImg"
            style={{
              borderColor: `${borderCarm}`,
              display: `${armsDisplay}`,
            }}
            src="Figur-arme-anim.gif"
            alt="arms"
          />
        </Link>
      </div>
    </>
  );
};

export default Icons;
