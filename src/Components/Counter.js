import React from "react";
import "./counter.css";
const Counter = ({ count, countColor }) => {
  return (
    <div id="counters">
      <span id="counterSpan">
        <h1 id="counter" style={{ color: countColor }} className="counter">
          {count}
        </h1>
      </span>
    </div>
  );
};

export default Counter;
