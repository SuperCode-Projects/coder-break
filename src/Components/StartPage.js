import React from "react";
import "./startPage.css";

import { Link } from "react-router-dom";
const StartPage = ({ link }) => {
  return (
    <div className="startPage">
      <h1 className="logo">Coder Break</h1>
      <div className="startInfo">
        <p>
          Are you tired and want to do something to refresh you? So let's get
          some exercises chosen with the help of physical health professionals.
          Here we have three exercises for the neck and upper body and for the
          arms.
        </p>

        <Link className="start" to={link}>
          Let's go
        </Link>
        <div id="images">
          <img src="Figur-Kopf-Anim.gif" />

          <img src="Figur-oberkörper-Anim.gif" />

          <img src="Figur-arme-anim.gif" />
        </div>
      </div>
    </div>
  );
};

export default StartPage;
