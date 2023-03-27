'use strict'

import React from 'react'

const Header = (props) => {
  return (
    <div className="header">
      <div className='title-wrapper'>
        <h1 className='base'><a className='title-btn scroll' href='#home'><div className="shine">MEGAN KLUSEY</div></a></h1>
        <h1 className='gradient' data-text='MEGAN KLUSEY'><a className='title-btn scroll' href='#home'></a></h1>
      </div>
      <nav>
        <div className='about-wrapper'>
          <li className='base'><a className='nav-btn scroll' href='#about'><div className="shine about">ABOUT</div></a></li>
          <li className='gradient' data-text='ABOUT'><a className='nav-btn scroll' href='#about'></a></li>
        </div>
        <div className='work-wrapper'>
          <li className='base'><a className='nav-btn scroll' href='#work'><div className="shine work">WORK</div></a></li>
          <li className='gradient' data-text='WORK'><a className='nav-btn scroll' href='#work'></a></li>
        </div>
        <div className='contact-wrapper'>
          <li className='base'><a className='nav-btn scroll' href='#contact'><div className="shine contact">CONTACT</div></a></li>
          <li className='gradient' data-text='CONTACT'><a className='nav-btn scroll' href='#contact'></a></li>
        </div>
      </nav>
    </div>  
  );
}

export default Header