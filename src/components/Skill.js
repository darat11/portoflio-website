import React from "react";

import skillStyles from "./skill.module.css";

export default function Skill(props) {
  return (
    <div>
      <div className={skillStyles.item}>{props.skill}</div>
    </div>
  );
}
