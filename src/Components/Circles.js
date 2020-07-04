import React from "react";

const Circles = (circleInPosition, circleOutPosition) => {
  return (
    <div id="circles">
      <div
        id="circleIn"
        style={{
          left: `${circleInPosition}`,
        }}
      ></div>
      <div
        id="circleOut"
        style={{
          left: `${circleOutPosition}`,
        }}
      ></div>
    </div>
  );
};

export default Circles;
