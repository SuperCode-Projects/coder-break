import React from "react";
import "./counter.css";
const Counter = ({ count, countColor }) => {
  return (
    <h1 id="counter" style={{ color: countColor }} className="counter">
      {count}
    </h1>
  );
};

export default Counter;
