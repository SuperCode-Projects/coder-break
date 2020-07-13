import React from "react";
import "./counter.css";
const Counter = ({ count, countColor, ausDisplay, einDisplay }) => {
  return (
    <div id="counters">
      <img style={{ display: `${einDisplay}` }} src="Arrows-einatmen.gif" />
      <span id="counterSpan">
        <h1 id="counter" style={{ color: countColor }} className="counter">
          {count}
        </h1>
      </span>
      <img style={{ display: `${ausDisplay}` }} src="Arrows-ausatmen.gif" />
    </div>
  );
};

export default Counter;
