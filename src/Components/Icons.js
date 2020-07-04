import React from "react";
import "./icons.css";
const Icons = ({ bC }) => {
  return (
    <div className="icons">
      <img
        style={{ borderColor: `${bC}` }}
        src="icons8-head-massage-area-50.png"
      />
      <img
        style={{ borderColor: `${bC}` }}
        src="icons8-back-massage-area-50.png"
      />
      <img
        style={{ borderColor: `${bC}` }}
        src="icons8-arm-massage-area-50.png"
      />
    </div>
  );
};

export default Icons;
