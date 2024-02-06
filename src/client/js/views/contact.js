'use strict'

import React from 'react'

const Contact = (props) => {
  return (
    <section className="contact-container" id="contact">
      <div className='contact-form-wrapper'>
        <p className='contact-description' data-aos="zoom-in">Please get in touch by e&#8209;mailing &nbsp; 
         <a href="mailto:megan.klusey@hotmail.co.uk">megan.klusey@hotmail.co.uk</a> <br/> or by 
         using the form below:</p>
        <form className='contact-form' onSubmit={props.submitForm}>
          <input id='name' name='name' type='text' className='form-control' placeholder='your name' required data-aos="fade-right" />
          <br/>
          <input id='email' name='email' type='email' className='form-control' placeholder='your email address' required data-aos="fade-right" />
          <br/>
          <input id='subject' name='name' type='text' className='form-control' placeholder='subject' required data-aos="fade-right" />
          <br/>
          <textarea id='message' name='message' className='form-control' placeholder='your message' required data-aos="fade-right"></textarea>
          <br/>
          <input id='submit' type='submit' className='form-control submit shine' value='SEND' data-aos="zoom-out" />
          <br/>
          <span id='status'></span>
        </form>
      </div>
    </section> 
  )
}

export default Contact