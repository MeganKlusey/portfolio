'use strict'

class Contact extends React.Component {
  render() {
    return (
      <>
        <form id='contactForm' onsubmit='submitForm();'>
          <p id='contactDescription'>If you have an enquiry or looking to hire, please get in touch using the form below.</p>
          <br/>
          <input id='name' name='name' type='text' class='formControl' placeholder='Name..' required />
          <br/>
          <input id='email' name='email' type='email' class='formControl' placeholder='Email address..' required />
          <br/>
          <textarea id='message' name='message' class='formControl' placeholder='Your message..' required ></textarea>
          <br/>
          <input id='submit' type='submit' class='formControl submit' value='SEND' />
          <br/>
          <span id='status'></span>
        </form>
      </> 
    );
  }
}

let domContainer = document.querySelector('#contact');
ReactDOM.render(<Contact />, domContainer);