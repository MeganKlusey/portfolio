'use strict'

import React from 'react'

const Contact = (props) => {
  return (
    <section className="contact-container" id="contact">
      <div className='contact-form-wrapper'>
        <p className='contact-description' data-aos="zoom-in">Please get in touch by using the form below or by e&#8209;mailing me at<br/> 
         <a href="mailto:megan.klusey@hotmail.co.uk">megan.klusey@hotmail.co.uk</a></p>
         <br/>
         <form className='contact-form' onSubmit={props.submitForm}>
          <input id='name' name='name' type='text' className='form-control' placeholder='your name' required data-aos="fade-right" />
          <br/>
          <input id='email' name='email' type='email' className='form-control' placeholder='your e-mail address' required data-aos="fade-right" />
          <br/>
          <textarea id='message' name='message' className='form-control' placeholder='your message' required data-aos="fade-right"></textarea>
          <br/>
          <input id='submit' type='submit' className='form-control submit' value='SEND' data-aos="zoom-out" data-aos-anchor-placement="center-bottom" />
          <br/>
          <span id='status'></span>
        </form>
      </div>
    </section> 
  )
}

export default Contact