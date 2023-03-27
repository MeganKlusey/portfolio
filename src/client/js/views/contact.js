'use strict'

import React from 'react'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <div className='contact-form-wrapper'>
        <p className='contact-description'>Please get in touch using the form below.</p>
        <br/>
        <form className='contact-form' onSubmit={props.submitForm}>
          <input id='name' name='name' type='text' className='form-control' placeholder='Name..' required />
          <br/>
          <input id='email' name='email' type='email' className='form-control' placeholder='Email address..' required />
          <br/>
          <textarea id='message' name='message' className='form-control' placeholder='Your message..' required ></textarea>
          <br/>
          <input id='submit' type='submit' className='form-control submit' value='SEND' />
          <br/>
          <span id='status'></span>
        </form>
      </div>
    </div> 
  )
}

export default Contact