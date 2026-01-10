"use strict";

import React from "react";

const Header = () => {
  const nav = [
    {
      name: "Megan Klusey",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <header>
      <nav>
        <h1 className="title-wrapper">
          <a className="header-btn home scroll" href="#home">
            <span className="base">
              <span className="shine">MEGAN KLUSEY</span>
            </span>
          </a>
          <span className="gradient" data-text="MEGAN KLUSEY"></span>
        </h1>
        <ul>
          <li className="about-wrapper">
            <a className="nav-list-btn about scroll" href="#about">
              <span className="base">
                <span className="shine">ABOUT</span>
              </span>
            </a>
            <span className="gradient" data-text="ABOUT"></span>
          </li>
          <li className="work-wrapper">
            <a className="nav-list-btn work scroll" href="#work">
              <span className="base">
                <span className="shine">WORK</span>
              </span>
            </a>
            <span className="gradient" data-text="WORK"></span>
          </li>
          <li className="contact-wrapper">
            <a className="nav-list-btn contact scroll" href="#contact">
              <span className="base">
                <span className="shine">CONTACT</span>
              </span>
            </a>
            <span className="gradient" data-text="CONTACT"></span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
