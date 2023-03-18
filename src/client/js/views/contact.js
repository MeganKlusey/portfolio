'use strict'

class Contact extends React.Component {
  render() {
    return (
      <div class="contact-container">
        <p id='contact-description'>If you have an enquiry or looking to hire, please get in touch using the form below.</p>
        <br/>
        <form class='contact-form' onSubmit='submitForm();'>
          <input id='name' name='name' type='text' class='form-control' placeholder='Name..' required />
          <br/>
          <input id='email' name='email' type='email' class='form-control' placeholder='Email address..' required />
          <br/>
          <textarea id='message' name='message' class='form-control' placeholder='Your message..' required ></textarea>
          <br/>
          <input id='submit' type='submit' class='form-control submit' value='SEND' />
          <br/>
          <span id='status'></span>
        </form>
      </div> 
    );
  }
}

let domContainer = document.querySelector('#contact');
ReactDOM.render(<Contact />, domContainer);