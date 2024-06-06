import React, { useEffect, useState } from 'react';

function Skills(props) {
  
  return (
    <div className='maang-skills'>
      <h2 className='section-heading' contentEditable='true'>CORE SKILLS</h2>    
      <hr className='horizontal-rule'/>  
      
      {Array.from({ length: props.rowsSkills }, (_, index) => (
        <p>Skills {index+1}</p>    
      ))}
    </div>
  );
}

export default Skills;
