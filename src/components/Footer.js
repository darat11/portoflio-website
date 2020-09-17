import React from "react";

import footerStyles from "./footer.module.css";

export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <div className={footerStyles.footer}>
      <p>
        Made by <strong>Geljić Meldin</strong>, &copy; {date}
      </p>
    </div>
  );
}
