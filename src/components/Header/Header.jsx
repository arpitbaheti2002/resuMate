// Header.js
import React from 'react';
import './header.css';

function Header(props) {
  return (
    <div className='header'>
      <div className='title'>
          <span className='bl'>Resu</span>
          <span>Mate</span>
          {props.name?
            <span className='sub-title'>{" < " + props.name + " > "}</span>
            :null
          }
      </div>
      <nav className='navbar'>
      </nav>
    </div>
  );
}

export default Header;
