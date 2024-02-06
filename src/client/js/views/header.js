'use strict'

import React from 'react'

const Header = (props) => {
  return (
    <header className="header-container">
      <div className="header">
        <div className='title-wrapper'>
          <h1 className='base'><a className='title-btn header-btn home scroll' href='#home'><div className="shine">MEGAN KLUSEY</div></a></h1>
          <h1 className='gradient' data-text='MEGAN KLUSEY'></h1>
        </div>
        <nav>
          <div className='about-wrapper'>
            <li className='base'><a className='nav-btn header-btn about scroll' href='#about'><div className="shine">ABOUT</div></a></li>
            <li className='gradient' data-text='ABOUT'></li>
          </div>
          <div className='work-wrapper'>
            <li className='base'><a className='nav-btn header-btn work scroll' href='#work'><div className="shine">WORK</div></a></li>
            <li className='gradient' data-text='WORK'></li>
          </div>
          <div className='contact-wrapper'>
            <li className='base'><a className='nav-btn header-btn contact scroll' href='#contact'><div className="shine">CONTACT</div></a></li>
            <li className='gradient' data-text='CONTACT'></li>
          </div>
        </nav>
      </div> 
    </header> 
  );
}

export default Header