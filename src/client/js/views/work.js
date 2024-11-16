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
                <a href="" className='view-project'>
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
                <a href="" className='view-project'>
                  <p>View project</p>
                  <div className="chevron-forward">
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                  </div>
                </a>
              </div>
            </div>
            <img src='' className='thumbnail' alt=''/>
          </div>
        </div>
        <div className='thumbnail-container' data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="100">
          <div className="thumbnail-wrapper">
            <div className='thumbnail-overlay'>
              <div className='overlay-content'>
                <a href="" className='view-project'>
                  <p>View project</p>
                  <div className="chevron-forward">
                    <ion-icon name="chevron-forward-outline"></ion-icon>
                  </div>
                </a>
              </div>
            </div>
            <img src='' className='thumbnail' alt=''/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work