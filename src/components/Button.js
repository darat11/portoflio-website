import React from "react";

import buttonStyles from "./button.module.css";

export default function Button(props) {
  return (
    <button disabled={props.disabled} className={buttonStyles.button}>
      {props.text}
    </button>
  );
}
