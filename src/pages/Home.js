import React from "react";
import Skill from "../components/Skill";
import Button from "../components/Button";

import { NavLink } from "react-router-dom";

import homeStyles from "./home.module.css";

/*
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointDown } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from "react-player";
*/

import data from "../data/data.json";

const frontEnd = data["front-end"];
const backEnd = data["back-end"];

export default function Home() {
  return (
    <div className={homeStyles.container}>
      <div className={homeStyles.about}>
        <h1 className={homeStyles.tittle}>Let me introduce myself</h1>
        <div className={homeStyles.textBox}>
          <p className={homeStyles.dividerB}>
            I have been always involved in coding and it was my main hobby for
            very long time. However, since 2018 I am fully commited to learn and
            develope with code in order to implement my own business ideas.
          </p>
          <p>
            Here is the list of my skills and the projects that I decided to
            show you.
          </p>
        </div>
        {/*<ReactPlayer
          controls
          className={homeStyles.player}
          url="https://www.youtube.com/watch?v=z6QVrqBkBgc&t=363s"
        />*/}
        <div className={homeStyles.ctaItems}>
          <NavLink className={homeStyles.ctaItem} to="/contact">
            <Button text="Contact me" />
          </NavLink>
          <NavLink className={homeStyles.ctaItem} to="/portfolio">
            <Button text="See my portfolio" />
          </NavLink>
        </div>
      </div>
      {/*<span className={homeStyles.divider}></span>*/}
      <div className={homeStyles.skills}>
        {/*<h1 className={homeStyles.tittle}>Skills</h1>*/}
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
