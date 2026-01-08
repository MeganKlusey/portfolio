"use strict";

import React from "react";
import MyMedium from "../img/mymedium.png";
import The10Vinyls from "../img/the-10-vinyls.png";
import HelloWorldByeWorld from "../img/hello-world-bye-world.png";
import WSMIndustries from "../img/wsm-industries.png";
import TSL from "../img/tsl.png";
import SEKO from "../img/seko.png";
import DominoJewellery from "../img/domino-jewellery.png";

const Work = (props) => {
  const projects = [
    {
      type: "personal",
      title: "Personal Projects:",
      projects: [
        {
          name: "myMedium",
          aosDelay: null,
          techStack: `React, Tailwind, jQuery, REST API, Node.js, Cloudflare Workers, 
          AWS (formerly used)`,
          link: "https://meganklusey.github.io/mymedium/",
          image: {
            url: MyMedium,
            alt: "My Medium thumbnail",
            position: null,
          },
        },
        {
          name: "The 10 Vinyls",
          aosDelay: 50,
          techStack: `Vue.js, SCSS, TypeScript`,
          link: "https://meganklusey.github.io/the-10-vinyls/",
          image: {
            url: The10Vinyls,
            alt: "The 10 Vinyls thumbnail",
            position: null,
          },
        },
        {
          name: "Hello World / Bye World",
          aosDelay: 100,
          techStack: "GSAP, SVG, SCSS, JavaScript",
          link: "https://codepen.io/Megan-K/pen/vEBBKxg/",
          image: {
            url: HelloWorldByeWorld,
            alt: "Hello World / Bye World thumbnail",
            position: "cover",
          },
        },
      ],
    },
    {
      type: "professional",
      title: `Professional Projects (collaborative work undertaken as part of my 
      front-end-focused agency role):`,
      projects: [
        {
          name: "WSM Industries",
          aosDelay: null,
          techStack: `WordPress, Tailwind, JavaScript, ScrollMagic`,
          link: "https://wsm-ind.com/",
          image: {
            url: WSMIndustries,
            alt: "WSM Industries thumbnail",
            position: "cover top",
          },
        },
        {
          name: "TSL",
          aosDelay: 50,
          techStack: `WordPress, SCSS, jQuery`,
          link: "https://tslprojects.com/",
          image: {
            url: TSL,
            alt: "TSL thumbnail",
            position: "cover top",
          },
        },
        {
          name: "SEKO",
          aosDelay: 100,
          techStack: `PHP (Yii2), Tailwind, jQuery, GSAP, ScrollMagic`,
          link: "https://www.seko.com/global/",
          image: {
            url: SEKO,
            alt: "SEKO thumbnail",
            position: "cover top",
          },
        },
        {
          name: "Domino Jewellery",
          aosDelay: 150,
          techStack: `PHP (Yii2), Tailwind, jQuery`,
          link: "https://www.dominojewellery.com/en/",
          image: {
            url: DominoJewellery,
            alt: "Domino Jewellery thumbnail",
            position: "cover top",
          },
        },
      ],
    },
  ];

  return (
    <section className="work-container" id="work">
      <div className="work-categories">
        <div className="work-category">
          <h3 data-aos="zoom-in">Personal Projects:</h3>
          <div className="thumbnails-container">
            <div
              className="thumbnail-container"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <div className="thumbnail-wrapper">
                <div className="thumbnail-overlay">
                  <div className="overlay-content">
                    <div className="project-info">
                      <h4>myMedium</h4>
                      <p>
                        <span className="list-title">Tech Stack:</span>&nbsp;
                        <span className="list">
                          React, Tailwind, jQuery, REST API, Node.js, Cloudflare
                          Workers, AWS (formerly used)
                        </span>
                      </p>
                    </div>
                    <a
                      href="https://meganklusey.github.io/mymedium/"
                      className="view-project"
                      target="_blank"
                    >
                      <p>View project</p>
                      <div className="chevron-forward">
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                      </div>
                    </a>
                  </div>
                </div>
                <img
                  src={MyMedium}
                  className="thumbnail"
                  alt="My Medium thumbnail"
                />
              </div>
            </div>
            <div
              className="thumbnail-container"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay="50"
            >
              <div className="thumbnail-wrapper">
                <div className="thumbnail-overlay">
                  <div className="overlay-content">
                    <div className="project-info">
                      <h4>The 10 Vinyls</h4>
                      <p>
                        <span className="list-title">Tech Stack:</span>&nbsp;
                        <span className="list">Vue.js, SCSS, TypeScript</span>
                      </p>
                    </div>
                    <a
                      href="https://meganklusey.github.io/the-10-vinyls/"
                      className="view-project"
                      target="_blank"
                    >
                      <p>View project</p>
                      <div className="chevron-forward">
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                      </div>
                    </a>
                  </div>
                </div>
                <img
                  src={The10Vinyls}
                  className="thumbnail"
                  alt="The 10 Vinyls thumbnail"
                />
              </div>
            </div>
            <div
              className="thumbnail-container"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay="100"
            >
              <div className="thumbnail-wrapper">
                <div className="thumbnail-overlay">
                  <div className="overlay-content">
                    <div className="project-info">
                      <h4>Hello World / Bye World</h4>
                      <p>
                        <span className="list-title">Tech Stack:</span>&nbsp;
                        <span className="list">
                          GSAP, SVG, SCSS, JavaScript
                        </span>
                      </p>
                    </div>
                    <a
                      href="https://codepen.io/Megan-K/pen/vEBBKxg"
                      className="view-project"
                      target="_blank"
                    >
                      <p>View project</p>
                      <div className="chevron-forward">
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                      </div>
                    </a>
                  </div>
                </div>
                <img
                  src={HelloWorldByeWorld}
                  className="thumbnail cover"
                  alt="Hello World Bye World thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="work-category">
          <h3 data-aos="zoom-in">
            Professional Projects (collaborative work undertaken as part of my
            front-end-focused agency role):
          </h3>
          <div className="thumbnails-container">
            <div
              className="thumbnail-container"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
            >
              <div className="thumbnail-wrapper">
                <div className="thumbnail-overlay">
                  <div className="overlay-content">
                    <div className="project-info">
                      <h4>WSM Industries</h4>
                      <p>
                        <span className="list-title">Tech Stack:</span>&nbsp;
                        <span className="list">
                          WordPress, Tailwind, JavaScript, ScrollMagic
                        </span>
                      </p>
                    </div>
                    <a
                      href="https://wsm-ind.com/"
                      className="view-project"
                      target="_blank"
                    >
                      <p>View project</p>
                      <div className="chevron-forward">
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                      </div>
                    </a>
                  </div>
                </div>
                <img
                  src={WSMIndustries}
                  className="thumbnail cover top"
                  alt="WSM Industries thumbnail"
                />
              </div>
            </div>
            <div
              className="thumbnail-container"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay="50"
            >
              <div className="thumbnail-wrapper">
                <div className="thumbnail-overlay">
                  <div className="overlay-content">
                    <div className="project-info">
                      <h4>TSL</h4>
                      <p>
                        <span className="list-title">Tech Stack:</span>&nbsp;
                        <span className="list">WordPress, SCSS, jQuery</span>
                      </p>
                    </div>
                    <a
                      href="https://tslprojects.com/"
                      className="view-project"
                      target="_blank"
                    >
                      <p>View project</p>
                      <div className="chevron-forward">
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                      </div>
                    </a>
                  </div>
                </div>
                <img
                  src={TSL}
                  className="thumbnail cover top"
                  alt="TSL thumbnail"
                />
              </div>
            </div>
            <div
              className="thumbnail-container"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay="100"
            >
              <div className="thumbnail-wrapper">
                <div className="thumbnail-overlay">
                  <div className="overlay-content">
                    <div className="project-info">
                      <h4>SEKO</h4>
                      <p>
                        <span className="list-title">Tech Stack:</span>&nbsp;
                        <span className="list">
                          PHP (Yii2), Tailwind, jQuery, GSAP, ScrollMagic
                        </span>
                      </p>
                    </div>
                    <a
                      href="https://www.seko.com/global"
                      className="view-project"
                      target="_blank"
                    >
                      <p>View project</p>
                      <div className="chevron-forward">
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                      </div>
                    </a>
                  </div>
                </div>
                <img
                  src={SEKO}
                  className="thumbnail cover top"
                  alt="SEKO thumbnail"
                />
              </div>
            </div>
            <div
              className="thumbnail-container"
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-delay="150"
            >
              <div className="thumbnail-wrapper">
                <div className="thumbnail-overlay">
                  <div className="overlay-content">
                    <div className="project-info">
                      <h4>Domino Jewellery</h4>
                      <p>
                        <span className="list-title">Tech Stack:</span>&nbsp;
                        <span className="list">
                          PHP (Yii2), Tailwind, jQuery
                        </span>
                      </p>
                    </div>
                    <a
                      href="https://www.dominojewellery.com/en/"
                      className="view-project"
                      target="_blank"
                    >
                      <p>View project</p>
                      <div className="chevron-forward">
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                      </div>
                    </a>
                  </div>
                </div>
                <img
                  src={DominoJewellery}
                  className="thumbnail cover top"
                  alt="Domino Jewellery thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
