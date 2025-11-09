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
  return (
    <section className="work-container" id="work">
      <div class="work-category">
        <h3>Personal Projects:</h3>
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
                        React, Node.js, Tailwind, jQuery, REST API, AWS
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
                      <span className="list">GSAP, SVG, SCSS, JavaScript</span>
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
      <div class="work-category">
        <h3>
          Professional Projects (collaborative work completed as part of my role
          at Toru Digital):
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
                      <span className="list">WordPress, Tailwind, GSAP</span>
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
                      <span className="list">GSAP, SVG, SCSS, JavaScript</span>
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
                src={SEKO}
                className="thumbnail cover"
                alt="SEKO thumbnail"
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
                    <h4>Domino Jewellery</h4>
                    <p>
                      <span className="list-title">Tech Stack:</span>&nbsp;
                      <span className="list">GSAP, SVG, SCSS, JavaScript</span>
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
                src={DominoJewellery}
                className="thumbnail cover top"
                alt="Domino Jewellery thumbnail"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
