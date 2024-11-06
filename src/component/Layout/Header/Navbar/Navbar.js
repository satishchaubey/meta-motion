"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";
import classes from "./Navbar.module.css";
import headerData from '../json/header.json';

const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className={classes.header}>
      <div id={classes.headerChild}>
        <nav className={classes.nav}>
          <div className="containerHoon">
            <div>
              <Link href="/" rel="canonical" target="_self" className={classes.logo}>
                <img src="/headerlogo.png" alt="Company Logo" className={`img-fluid ${classes.compaignLogo}`} />
              </Link>
            </div>

            <div className={`${navActive ? classes.active : ""} ${classes.navMenuList}`}>
              {headerData?.nav_lists?.map((menu, idx) => (
                <span
                  key={menu.text}
                  onClick={() => { setActiveIdx(idx); setNavActive(false); }}
                >
                  <NavItem active={activeIdx === idx} text={menu.text} href={menu.link} />
                </span>
              ))}
            </div>
            <div className="d-flex justify-content-end">
              <div onClick={() => setNavActive(!navActive)} className={classes.navMenuBar}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
