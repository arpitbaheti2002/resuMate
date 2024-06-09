import React, { useEffect, useState } from 'react';
import General from './General';
import Education from './Education';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';
import Certifications from './Certifications';
import Achievements from './Achievements';
import './maang-resume.css';


function Resume(props) {
  const [isWarning, setIsWarning] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const resumeContainer = document.getElementById('maang-resume');
      const containerHeight = resumeContainer.clientHeight;
      
      setIsWarning(containerHeight > 1123);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="maang-resume" className={`resume a4-page`}>
      {isWarning?
      <>
        <hr className='warning-line'/>
        <p className='warning-message'>Single page</p>
      </>
      :<></>}
      <General displayPhone={props.displayPhone}/>
      <Education rowsEducation={props.rowsEducation}/>
      <Skills rowsSkills={props.rowsSkills}/>
      <Experience rowsExperience={props.rowsExperience}/>
      <Projects rowsProjects={props.rowsProjects}/>
      <Certifications rowsCertifications={props.rowsCertifications}/>
      <Achievements rowsAchievements={props.rowsAchievements}/>
    </div>
  )
}

export default Resume;
