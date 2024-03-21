import React, { useEffect, useState } from 'react';
import General from './General';
import Qualification from './Qualification';
import Projects from './Projects';
import Internships from './Internships';
import Cocurriculars from './Cocurriculars';
import Achievements from './Achievements';
import AdditionalInfo from './AdditionalInfo';

function Resume(props) {
  const [isWarning, setIsWarning] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const resumeContainer = document.getElementById('vit-resume');
      const containerHeight = resumeContainer.clientHeight;
      
      setIsWarning(containerHeight > 1123);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="vit-resume" className={`resume a4-page`}>
      {isWarning?
      <>
        <hr className='warning-line'/>
        <p className='warning-message'>Single page</p>
      </>
      :<></>}
      <General displayPhone={props.displayPhone}/>
      <Qualification displayCerts={props.displayCerts} rowsEducation={props.rowsEducation}/>
      <Projects rowsProjects={props.rowsProjects}/>
      <Internships rowsInternships={props.rowsInternships} />
      <Cocurriculars rowsCocurriculars={props.rowsCocurriculars} />
      <Achievements displayAchievements={props.displayAchievements} displayResponsibilities={props.displayResponsibilities}
                    displayExtracurriculars={props.displayExtracurriculars}/>
      <AdditionalInfo displayHobbies={props.displayHobbies} displayLanguages={props.displayLanguages}/>
    </div>
  )
}

export default Resume;
