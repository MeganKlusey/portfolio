'use strict'

class Header extends React.Component {
  render() {
    return (
      <div>
        <div class="title-wrapper">
          <h1 id='title-base'><a class='scroll' id='titleBtn' href='#home'>MEGAN KLUSEY</a></h1>
          <h1 id='title-gradient' data-text='MEGAN KLUSEY'><a class='scroll' id='titleBtn' href='#home'></a></h1>
        </div>
        <ul id='nav'>
        <div class='marker'></div>
          <li><a class='navBtn scroll' href='#about'>ABOUT</a></li>
          <li><a class='navBtn scroll' href='#work'>WORK</a></li>
          <li><a class='navBtn scroll' href='#contact'>CONTACT</a></li>
        </ul>
      </div>  
    );
  }
}

let domContainer = document.querySelector('#header');
ReactDOM.render(<Header />, domContainer);