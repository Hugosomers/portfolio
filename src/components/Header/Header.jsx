import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ReactSwitch from "react-switch";
import headerStyles from '../../css/header.module.css';
import { HiMenuAlt1 } from 'react-icons/hi';

export default function Header() {
  const [checkedSwitch, setCheckedSwitch] = useState(false);
  const [menuToogle, setMenu] = useState(false);
  console.log(menuToogle)

  const switchHandle = () => {
    setCheckedSwitch(!checkedSwitch)
  }

  const menuToggler = () => {
    setMenu(!menuToogle)
  }

  return (
    <div className={headerStyles.headerMainDiv}>
      <header
        className={headerStyles.headerContainer}
      >
        <ReactSwitch
          onChange={ switchHandle }
          checked={checkedSwitch}
          uncheckedIcon={false}
          checkedIcon={false}
          onColor="#2cb67d"
        >
        </ReactSwitch>

        <HiMenuAlt1
          className={headerStyles.HbMenu}
          onClick={ menuToggler }
        />

        <nav
          className={headerStyles.navContainer}
        >
          <NavLink
            exact to="/portfolio"
            className={headerStyles.navLink}
            activeClassName={headerStyles.activeNavLink}
          >
            Início
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
      <nav
        className={menuToogle ? headerStyles.menuVisible : headerStyles.menuHide}
      >
        <h1 onClick={ menuToggler }>Close</h1>
        <NavLink
            exact to="/portfolio"
            className={headerStyles.navLink}
            activeClassName={headerStyles.activeNavLink}
          >
            Início
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
    </div>
  )
}

