"use strict";

import React from "react";
import Modo from "../img/modo.png";
import MyMedium from "../img/mymedium.png";
import The10Vinyls from "../img/the-10-vinyls.png";
import HelloWorldByeWorld from "../img/hello-world-bye-world.png";
import WSMIndustries from "../img/wsm-industries.png";
import TSL from "../img/tsl.png";
import SEKO from "../img/seko.png";
import DominoJewellery from "../img/domino-jewellery.png";

const Work = () => {
  const projectTypes = [
    {
      type: "personal",
      title: "Personal Projects:",
      projects: [
        {
          name: "Modo (Landing Page)",
          aosDelay: null,
          techStack: `WordPress, PHP, HTML5, SCSS, JavaScript`,
          link: "https://2588dac1.modo-3xr.pages.dev/",
          image: {
            src: Modo,
            alt: "Modo thumbnail",
            position: null,
          },
        },
        {
          name: "myMedium",
          aosDelay: 50,
          techStack: `React, Tailwind, jQuery, REST API, Node.js`,
          link: "https://meganklusey.github.io/mymedium/",
          image: {
            src: MyMedium,
            alt: "My Medium thumbnail",
            position: null,
          },
        },
        {
          name: "The 10 Vinyls",
          aosDelay: 100,
          techStack: `Vue.js, SCSS, TypeScript`,
          link: "https://meganklusey.github.io/the-10-vinyls/",
          image: {
            src: The10Vinyls,
            alt: "The 10 Vinyls thumbnail",
            position: null,
          },
        },
        {
          name: "Hello World / Bye World",
          aosDelay: 150,
          techStack: "GSAP, SVG, SCSS, JavaScript",
          link: "https://codepen.io/Megan-K/pen/vEBBKxg/",
          image: {
            src: HelloWorldByeWorld,
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
            src: WSMIndustries,
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
            src: TSL,
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
            src: SEKO,
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
            src: DominoJewellery,
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
        {projectTypes &&
          projectTypes.map((projectType, index) => {
            return (
              <div key={index} className="work-category">
                {projectType && (
                  <>
                    {projectType.title && <h3 data-aos="zoom-in">{projectType.title}</h3>}
                    <div className="thumbnails-container">
                      {projectType.type == "personal" &&
                        projectType.projects?.map((project, index) => {
                          return (
                            <div key={index} className="thumbnail-container" data-aos="fade-up" data-aos-delay={project.aosDelay} data-aos-anchor-placement="center-bottom">
                              <div className="thumbnail-wrapper">
                                <div className="thumbnail-overlay">
                                  <div className="overlay-content">
                                    <div className="project-info">
                                      <h4>{project.name}</h4>
                                      <p>
                                        <span className="list-title">Tech Stack:</span>
                                        &nbsp;
                                        <span className="list">{project.techStack}</span>
                                      </p>
                                    </div>
                                    <a href={project.link} className="view-project" target="_blank">
                                      <p>View project</p>
                                      <div className="chevron-forward">
                                        <ion-icon name="chevron-forward-outline"></ion-icon>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <img src={project.image.src} className={`thumbnail ${project.image.position}`} alt={project.image.alt} />
                              </div>
                            </div>
                          );
                        })}
                      {projectType.type == "professional" &&
                        projectType.projects?.map((project, index) => {
                          return (
                            <div key={index} className="thumbnail-container" data-aos="fade-up" data-aos-delay={project.aosDelay} data-aos-anchor-placement="center-bottom">
                              <div className="thumbnail-wrapper">
                                <div className="thumbnail-overlay">
                                  <div className="overlay-content">
                                    <div className="project-info">
                                      <h4>{project.name}</h4>
                                      <p>
                                        <span className="list-title">Tech Stack:</span>
                                        &nbsp;
                                        <span className="list">{project.techStack}</span>
                                      </p>
                                    </div>
                                    <a href={project.link} className="view-project" target="_blank">
                                      <p>View project</p>
                                      <div className="chevron-forward">
                                        <ion-icon name="chevron-forward-outline"></ion-icon>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                                <img src={project.image.src} className={`thumbnail ${project.image.position}`} alt={project.image.alt} />
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </>
                )}
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Work;
