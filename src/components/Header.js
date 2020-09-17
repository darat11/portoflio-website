import React from "react";
import { NavLink, Link } from "react-router-dom";

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
            <NavLink
              exact
              activeClassName={headerStyles.navItemActive}
              className={`${headerStyles.navItem}`}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={headerStyles.navItemActive}
              className={`${headerStyles.navItem}`}
              to="/portfolio"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={headerStyles.navItemActive}
              className={`${headerStyles.navItem}`}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
