import React from "react";
import { NavLink, Link } from "react-router-dom";

import Button from "./Button";

import headerStyles from "./header.module.css";

export default function Header() {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.brand}>
        {/*<div className={headerStyles.brandImage}></div>*/}
        <Link className={headerStyles.brandHeading} exact to="/">
          Meldin Geljić
        </Link>
      </div>
      <nav className={headerStyles.navigation}>
        <ul className={headerStyles.navItems}>
          <li>
            <NavLink exact activeClassName={headerStyles.navItemActive} to="/">
              <Button text="Home" />
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={headerStyles.navItemActive}
              to="/portfolio"
            >
              <Button text="Portfolio" />
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={headerStyles.navItemActive} to="/contact">
              <Button text="Contact" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
