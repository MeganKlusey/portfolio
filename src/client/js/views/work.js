'use strict'

import React from 'react'

const Work = (props) => {
  return (
    <section className='work-container' id="work">
      <div className='thumbnails-container'>
        <div className='thumbnail-container' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <div className="thumbnail-wrapper">
            <div className='thumbnail-overlay'>
              <div className='overlay-content'>
                <div className='project-info'>
                  <h4>myMedium</h4>
                  <p><span className='list-title'>Tech Stack:</span>&nbsp;<span className='list'>React, Node.js, Tailwind, jQuery, REST API</span></p>
                </div>
                <a href="https://meganklusey.github.io/mymedium/" className='view-project' target='_blank'>
                  <p>View project</p>
                  <div className="chevron-forward">
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                  </div>
                </a>
              </div>
            </div>
            <img src='src/client/js/img/mymedium.png' className='thumbnail' alt='My Medium thumbnail'/>
          </div>
        </div>
        <div className='thumbnail-container' data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="50">
          <div className="thumbnail-wrapper">
            <div className='thumbnail-overlay'>
              <div className='overlay-content'>
                <div className='project-info'>
                  <h4>The 10 Vinyls</h4>
                  <p><span className='list-title'>Tech Stack:</span>&nbsp;<span className='list'>Vue, SCSS, JavaScript</span></p>
                </div>
                <a href="" className='view-project'>
                  <p>View project</p>
                  <div className="chevron-forward">
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                  </div>
                </a>
              </div>
            </div>
            <img src='src/client/js/img/the-10-vinyls.png' className='thumbnail' alt='The 10 Vinyls thumbnail'/>
          </div>
        </div>
        <div className='thumbnail-container' data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="100">
          <div className="thumbnail-wrapper">
            <div className='thumbnail-overlay'>
              <div className='overlay-content'>
                <div className='project-info'>
                  <h4>Hello World / Bye World</h4>
                  <p><span className='list-title'>Tech Stack:</span>&nbsp;<span className='list'>GSAP, SVG, SCSS, JavaScript</span></p>
                </div>
                <a href="" className='view-project'>
                  <p>View project</p>
                  <div className="chevron-forward">
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                  </div>
                </a>
              </div>
            </div>
            <img src='src/client/js/img/hello-world-bye-world.png' className='thumbnail cover' alt='Hello World Bye World thumbnail'/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work