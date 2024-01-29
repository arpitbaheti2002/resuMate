import React from 'react';
import './mobilePage.css';

function MobilePage() {
  return (
    <div className='mobile-screen'>
      <div className='mobile-title'>
          <span className='blue-text'>Resu </span>
          <span className='black-text'>Mate</span>
      </div>
      <br />
      <p>Optimal viewing experience is best enjoyed on larger screens.</p> 
      <br />
      <p className='blue'>Please access this site using a larger display for the best experience.</p>
    </div>
  )
}

export default MobilePage
