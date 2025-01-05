'use strict'

import React from 'react'

const Contact = () => {
  let submitted;

  function onSubmit() {
    submitted = true;
  }

  function onLoad() {
    if (submitted) {}
  }

  return (
    <section className="contact-container" id="contact">
      <div className='contact-form-wrapper'>
        <p className='contact-description' data-aos="zoom-in">Please get in touch by using the form below or by e&#8209;mailing me at<br/> 
         <a href="mailto:megan.klusey@hotmail.co.uk">megan.klusey@hotmail.co.uk</a></p>
         <br/>
         <form className='contact-form' name="gform" id="gform" encType="text/plain" target="hidden_iframe" onSubmit={onSubmit}
         action="https://docs.google.com/forms/d/e/1FAIpQLSdc2H-oTxmpkTGLb5yQf-ZLbwZgoi2dmc2DNgL2eOwZRXDdeg/formResponse">
          <input id='entry.1996862926' name='entry.1996862926' type='text' className='form-control' placeholder='your name' required data-aos="fade-right" /><br/>
          <input id='entry.588828281' name='entry.588828281' type='email' className='form-control' placeholder='your e-mail address' required data-aos="fade-right" /><br/>
          <textarea id='entry.1701379251' name='entry.1701379251' className='form-control' placeholder='your message' required data-aos="fade-right"></textarea><br/>
          <input id='submit' type='submit' className='form-control submit' value='SEND' data-aos="zoom-out" data-aos-anchor-placement="center-bottom" />
        </form>
        <br/>
        <iframe name="hidden_iframe" id="hidden_iframe" onLoad={onLoad}></iframe>
      </div>
    </section> 
  )
}

export default Contact