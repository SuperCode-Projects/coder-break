import React from "react";
import "./counter.css";
const Counter = ({ count, countStyle }) => {
  return (
    <h1
      style={{ display: `${countStyle}` }}
      className="counter"
    >{`${count}`}</h1>
  );
};

export default Counter;
