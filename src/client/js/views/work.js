'use strict'

import React from 'react'

const Work = (props) => {
  return (
    <section className='work-container' id="work">
      <div className='thumbnails-container'>
        <div className='thumbnail-container' data-aos="fade-up" data-aos-anchor-placement="center-bottom">
          <div class="thumbnail-wrapper">
            <div className='thumbnail-overlay slide-up'>
              <a href="">View project</a>
            </div>
            <img src='' className='thumbnail' alt=''/>
          </div>
        </div>
        <div className='thumbnail-container' data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="50">
          <div class="thumbnail-wrapper">
            <div className='thumbnail-overlay slide-up'>
              <a href="">View project</a>
            </div>
            <img src='' className='thumbnail' alt=''/>
          </div>
        </div>
        <div className='thumbnail-container' data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-delay="100">
          <div class="thumbnail-wrapper">
            <div className='thumbnail-overlay slide-up'>
              <a href="">View project</a>
            </div>
            <img src='' className='thumbnail' alt=''/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work