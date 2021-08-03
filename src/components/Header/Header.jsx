import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ReactSwitch from "react-switch";
import headerStyles from '../../css/header.module.css';

export default function Header() {
  const [checkedSwitch, setCheckedSwitch] = useState(false);

  const switchHandle = () => {
    setCheckedSwitch(!checkedSwitch)
  }

  return (
    <header
      className={headerStyles.headerContainer}
    >
      <ReactSwitch
        onChange={ switchHandle }
        checked={checkedSwitch}
      >
      </ReactSwitch>
      <nav
        className={headerStyles.navContainer}
      >
        <NavLink
          exact to="/portfolio"
          className={headerStyles.navLink}
          activeClassName={headerStyles.activeNavLink}
        >
          Home
        </NavLink>

        <NavLink
          exact to="/portfolio/projetos"
          className={headerStyles.navLink}
          activeClassName={headerStyles.activeNavLink}
        >
          Projetos
        </NavLink>

        <NavLink
          exact to="/portfolio/contato"
          className={headerStyles.navLink}
          activeClassName={headerStyles.activeNavLink}
        >
          Contato
        </NavLink>
      </nav>
    </header>
  )
}
