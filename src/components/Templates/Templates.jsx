import React from 'react';
import './templates.css';
import TemplateCard from './TemplateCard';

import VIT_Reusme from '../../images/VIT Bhopal CSE Format.jpg';

function Templates() {
  return (
    <div className='templates'>
      <TemplateCard name="VIT Format" image_link={VIT_Reusme} link={'/VITResume'}/>
    </div>
    
  )
}



export default Templates;
