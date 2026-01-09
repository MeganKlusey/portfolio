"use strict";

import React from "react";

const About = () => {
  return (
    <section className="about-container" id="about">
      <div>
        <p
          className="aboutText"
          data-aos-anchor-placement="top-center"
          data-aos="zoom-in"
          data-aos-duration="300"
        >
          <strong>
            My passion for web development stems from the opportunity to blend
            problem-solving with creativity harmoniously.
          </strong>
          <br />
          <br />
          From sleek aesthetics and seamless functionality, I believe that users
          worldwide deserve to have a satisfying experience, and this drives me
          towards innovation and optimisation. I aim to continue growing as a
          developer and propel myself to new heights.
          <br />
          <br />
          With over four years of commercial experience and a first-class
          Honours degree in the computing field, my journey so far has equipped
          me with a diverse skill set, including technologies such as{" "}
          <strong>React</strong>,&nbsp;
          <strong>Vue.js</strong>, <strong>TypeScript</strong>,&nbsp;
          <strong>PHP (Yii2)</strong>, <strong>HTML</strong>,&nbsp;
          <strong>SCSS</strong>, and <strong>Tailwind</strong>, which are
          showcased in some of my projects below.
        </p>
      </div>
    </section>
  );
};

export default About;
