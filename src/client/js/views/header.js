"use strict";

import React from "react";

const Header = () => {
  const nav = [
    {
      title: "Megan Klusey",
      name: "home",
      link: "#home",
    },
    {
      title: "About",
      name: "about",
      link: "#about",
    },
    {
      title: "Work",
      name: "work",
      link: "#work",
    },
    {
      title: "Contact",
      name: "contact",
      link: "#contact",
    },
  ];

  return (
    <header>
      <nav>
        {nav
          .filter((item) => item.name == "home")
          .map((item, index) => (
            <h1 key={index} className="title-wrapper">
              <a className={`header-btn ${item.name} scroll`} href={item.link}>
                <span className="base">
                  <span className="shine">{item.title}</span>
                </span>
              </a>
              <span className="gradient" data-text={item.title}></span>
            </h1>
          ))}
        <ul>
          {nav
            .filter((item) => item.name != "home")
            .map((item, index) => (
              <li key={index} className={`${item.name}-wrapper`}>
                <a className={`nav-list-btn ${item.name} scroll`} href={item.link}>
                  <span className="base">
                    <span className="shine">{item.title}</span>
                  </span>
                </a>
                <span className="gradient" data-text={item.title}></span>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
