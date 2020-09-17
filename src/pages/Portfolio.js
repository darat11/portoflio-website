import React from "react";

import portfolioStyles from "./portfolio.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointDown } from "@fortawesome/free-solid-svg-icons";

import { Helmet } from "react-helmet";

export default function Portfolio() {
  return (
    <div className={portfolioStyles.container}>
      <Helmet>
        <title>Meldin | Porftolio</title>
      </Helmet>
      <h1 className={portfolioStyles.tittle}>
        Awesome projects here <FontAwesomeIcon icon={faHandPointDown} />
      </h1>
    </div>
  );
}
