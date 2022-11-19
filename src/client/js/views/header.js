'use strict'

class Header extends React.Component {
  render() {
    return (
      <div>
        <div class='title-wrapper'>
          <h1 class='base'><a class='title-btn scroll' href='#home'><div class="shine">MEGAN KLUSEY</div></a></h1>
          <h1 class='gradient' data-text='MEGAN KLUSEY'><a class='title-btn scroll' href='#home'></a></h1>
        </div>
        <nav>
          <div class='about-wrapper'>
            <li class='base'><a class='nav-btn scroll' href='#about'><div class="shine about">ABOUT</div></a></li>
            <li class='gradient' data-text='ABOUT'><a class='nav-btn scroll' href='#about'></a></li>
          </div>
          <div class='work-wrapper'>
            <li class='base'><a class='nav-btn scroll' href='#work'><div class="shine work">WORK</div></a></li>
            <li class='gradient' data-text='WORK'><a class='nav-btn scroll' href='#work'></a></li>
          </div>
          <div class='contact-wrapper'>
            <li class='base'><a class='nav-btn scroll' href='#contact'><div class="shine contact">CONTACT</div></a></li>
            <li class='gradient' data-text='CONTACT'><a class='nav-btn scroll' href='#contact'></a></li>
          </div>
        </nav>
      </div>  
    );
  }
}

let domContainer = document.querySelector('#header');
ReactDOM.render(<Header />, domContainer);