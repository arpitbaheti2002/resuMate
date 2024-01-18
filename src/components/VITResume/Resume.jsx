import React from 'react';
import General from './General';
import Qualification from './Qualification';

function Resume(props) {
  return (
    <div className='resume a4-page'>
      <General displayPhone={props.displayPhone}/>
      <Qualification displayCerts={props.displayCerts} colsEducation={props.colsEducation}/>
    </div>
  )
}

export default Resume
