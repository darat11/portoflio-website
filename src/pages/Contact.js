import React from "react";
import FormComponent from "../components/Form";
import contactStyles from "./contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Helmet } from "react-helmet";

export default function Contact() {
  return (
    <div className={contactStyles.container}>
      <Helmet>
        <title>Meldin | Contact</title>
      </Helmet>
      {/*<h1 className={contactStyles.tittle}>
        Contact form and info {/*<FontAwesomeIcon icon={faHandPointDown}
      </h1>*/}
      <div className={contactStyles.form}>
        <FormComponent />
      </div>

      <div className={contactStyles.iconBox}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/darat11/"
        >
          <FontAwesomeIcon icon={faGithub} className={contactStyles.icon} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/Meldin52288635"
        >
          <FontAwesomeIcon icon={faTwitter} className={contactStyles.icon} />
        </a>
      </div>
    </div>
  );
}
