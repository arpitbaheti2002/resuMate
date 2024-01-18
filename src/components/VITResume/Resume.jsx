import React from 'react';
import General from './General';
import Qualification from './Qualification';
import Projects from './Projects';

function Resume(props) {
  return (
    <div className='resume a4-page'>
      <General displayPhone={props.displayPhone}/>
      <Qualification displayCerts={props.displayCerts} rowsEducation={props.rowsEducation}/>
      <Projects rowsProjects={props.rowsProjects}/>
    </div>
  )
}

export default Resume
