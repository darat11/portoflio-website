import React from "react";
import Skill from "../components/Skill";

import homeStyles from "./home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointDown } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";

import data from "../data/data.json";
import thumbnail from "../assets/images/thumbnail.jpg";

const frontEnd = data["front-end"];
const backEnd = data["back-end"];

export default function Home() {
  console.log(frontEnd);
  return (
    <div className={homeStyles.container}>
      <div className={homeStyles.about}>
        <h1 className={homeStyles.tittle}>
          Lemme introduce mayself <FontAwesomeIcon icon={faHandPointDown} />
        </h1>
        <ReactPlayer
          light={thumbnail}
          controls
          className={homeStyles.player}
          url="https://www.youtube.com/watch?v=z6QVrqBkBgc&t=363s"
        />
      </div>
      <span className={homeStyles.divider}></span>
      <div className={homeStyles.skills}>
        <h1 className={homeStyles.tittle}>Skills</h1>
        <h3 className={homeStyles.skillTitle}>Front-End</h3>
        <div className={homeStyles.skillsItems}>
          {frontEnd.map((skill) => {
            return <Skill skill={skill.language} />;
          })}
        </div>
        <h3 className={homeStyles.skillTitle}>Back-End</h3>
        <div className={homeStyles.skillsItems}>
          {backEnd.map((skill) => {
            return <Skill skill={skill.language} />;
          })}
        </div>
      </div>
    </div>
  );
}
