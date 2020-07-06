import React from "react";
import "./signin.css";
import { Link } from "react-router-dom";
const Signin = ({ link, firstname, lastname }) => {
  localStorage.setItem("firstname", firstname);
  localStorage.setItem("lastname", lastname);
  return (
    <div className="signin">
      <h1 className="logo">Coder Break</h1>
      <div className="inputs">
        <input type="text" value={firstname} placeholder="Firstname" />
        <input type="text" value={lastname} placeholder="Lastname" />

        <Link className="start" to={link}>
          Start
        </Link>
      </div>
    </div>
  );
};

export default Signin;
