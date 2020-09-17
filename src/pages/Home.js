import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointDown } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";

import homeStyles from "./home.module.css";

export default function Home() {
  return (
    <div className={homeStyles.container}>
      <div className={homeStyles.about}>
        <h1 className={homeStyles.tittle}>
          Lemme introduce mayself <FontAwesomeIcon icon={faHandPointDown} />
        </h1>
        <ReactPlayer
          className={homeStyles.player}
          url="https://www.youtube.com/watch?v=z6QVrqBkBgc&t=363s"
        />
      </div>
      <span className={homeStyles.divider}></span>
      <div className={homeStyles.skills}>
        <h1 className={homeStyles.tittle}>Skills</h1>
        <p>List of skills(on the right)</p>
      </div>
    </div>
  );
}
