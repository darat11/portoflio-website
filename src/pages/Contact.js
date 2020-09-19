import React from "react";
import { Link } from "react-router-dom";
import Form from "../components/Form";
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
      <h1 className={contactStyles.tittle}>
        Contact form and info {/*<FontAwesomeIcon icon={faHandPointDown}*/}
      </h1>
      <div className={contactStyles.form}>
        <Form />
      </div>

      <div className={contactStyles.iconBox}>
        <Link>
          <FontAwesomeIcon icon={faGithub} className={contactStyles.icon} />
        </Link>
        <Link>
          <FontAwesomeIcon icon={faTwitter} className={contactStyles.icon} />
        </Link>
      </div>
    </div>
  );
}
