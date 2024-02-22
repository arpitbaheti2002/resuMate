import React from 'react';
import General from './General';
import Qualification from './Qualification';
import Projects from './Projects';
import Internships from './Internships';
import Cocurriculars from './Cocurriculars';
import Achievements from './Achievements';
import AdditionalInfo from './AdditionalInfo';

function Resume(props) {

  return (
    <div id="vit-resume" className='resume a4-page'>
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
