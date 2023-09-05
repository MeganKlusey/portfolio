'use strict'

import React from 'react'

const Contact = (props) => {
  return (
    <div className="contact-container" id="contact">
      <div className='contact-form-wrapper'>
        <p className='contact-description'>Feel free to get in touch!</p>
        <br/>
        <form className='contact-form' onSubmit={props.submitForm}>
          <input id='name' name='name' type='text' className='form-control' placeholder='name' required />
          <br/>
          <input id='email' name='email' type='email' className='form-control' placeholder='email address' required />
          <br/>
          <textarea id='message' name='message' className='form-control' placeholder='your message' required ></textarea>
          <br/>
          <input id='submit' type='submit' className='form-control submit shine' value='SEND' />
          <br/>
          <span id='status'></span>
        </form>
      </div>
    </div> 
  )
}

export default Contact