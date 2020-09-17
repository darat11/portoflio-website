import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import layoutStyles from "./layout.module.css";

export default function Layout(props) {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        <div className={layoutStyles.mainContent}>{props.children}</div>
      </div>
      <Footer />
    </div>
  );
}
