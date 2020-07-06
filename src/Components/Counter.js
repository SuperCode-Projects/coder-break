import React from "react";
import "./counter.css";
const Counter = ({ count }) => {
  return <h1 className="counter">{`${count}`}</h1>;
};

export default Counter;
