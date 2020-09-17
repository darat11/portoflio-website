import React from "react";

import contactStyles from "./contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointDown } from "@fortawesome/free-solid-svg-icons";

import { Helmet } from "react-helmet";

export default function Contact() {
  return (
    <div className={contactStyles.container}>
      <Helmet>
        <title>Meldin | Contact</title>
      </Helmet>
      <h1 className={contactStyles.tittle}>
        Contact form and info <FontAwesomeIcon icon={faHandPointDown} />
      </h1>
    </div>
  );
}
