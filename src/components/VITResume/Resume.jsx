import React, { useState } from 'react';
import General from './General';

function Resume(props) {

  return (
    <div className='resume a4-page'>
      <General displayPhone={props.displayPhone}/>
    </div>
  )
}

export default Resume
