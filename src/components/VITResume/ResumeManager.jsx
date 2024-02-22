import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { IoMdSettings } from "react-icons/io";
import { FaPrint } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";
import Header from '../Header/Header';
import Resume from './Resume';
import './vitResume.css';
import ResumeControls from './ResumeControls';
import Feedback from '../Feedback/Feedback';

function ResumeManager() {
  const [displayPhone, togglePhone] = useState(true);
  const [displayCerts, toggleCerts] = useState(true);
  const [rowsEducation, changeRowsEducation] = useState(3);
  const [rowsProjects, changeRowsProjects] = useState(2);
  const [rowsInternships, changeRowsInternships] = useState(1);
  const [rowsCocurriculars, changeRowsCocurriculars] = useState(1);
  const [displayAchievements, toggleAchievements] = useState(true);
  const [displayResponsibilities, toggleResponsibilities] = useState(true);
  const [displayExtracurriculars, toggleExtracurriculars] = useState(true);
  const [displayHobbies, toggleHobbies] = useState(true);
  const [displayLanguages, toggleLanguages] = useState(true);

  useEffect(() => {
    const storedResume = localStorage.getItem('vitresume');
    if (storedResume) {
      const resumeData = JSON.parse(storedResume);
      togglePhone(resumeData.displayPhone === undefined ? true : resumeData.displayPhone);
      toggleCerts(resumeData.displayCerts === undefined ? true : resumeData.displayCerts);
      changeRowsEducation(resumeData.rowsEducation || 3);
      changeRowsProjects(resumeData.rowsProjects || 2);
      changeRowsInternships(resumeData.rowsInternships || 1);
      changeRowsCocurriculars(resumeData.rowsCocurriculars || 1);
      toggleAchievements(resumeData.displayAchievements === undefined ? true : resumeData.displayAchievements)
      toggleResponsibilities(resumeData.displayResponsibilities === undefined ? true : resumeData.displayResponsibilities)
      toggleExtracurriculars(resumeData.displayExtracurriculars === undefined ? true : resumeData.displayExtracurriculars)
      toggleHobbies(resumeData.displayHobbies === undefined ? true : resumeData.displayHobbies)
      toggleLanguages(resumeData.displayLanguages === undefined ? true : resumeData.displayLanguages)
  
      document.querySelector('#certifications').innerHTML = resumeData.certifications;
    }
  }, []);

  window.addEventListener('beforeprint', function(event) {
    event.preventDefault();
    handlePrint();
  });

  const handlePrint = () => {
    document.body.style.zoom = "100%";
    window.print();
  };

  useState(() => {
    const handleBeforeUnload = (event) => {
      const message = "Leaving this page will discard your changes. Are you sure, you want to reload?";
      event.returnValue = message; 
      return message;
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);


  return (
    <div>
      <Header name="VIT Format"/>
      <div className='resume-container'>
        <Resume 
          displayPhone={displayPhone} 
          displayCerts={displayCerts}
          rowsEducation={rowsEducation}
          rowsProjects={rowsProjects}
          rowsInternships={rowsInternships}
          rowsCocurriculars={rowsCocurriculars}
          displayAchievements={displayAchievements}
          displayResponsibilities={displayResponsibilities}
          displayExtracurriculars={displayExtracurriculars}
          displayHobbies={displayHobbies}
          displayLanguages={displayLanguages}
        />
        <button className="resume-control-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
          <IconContext.Provider value={{color: "#005BA2", size: "5vh"}}>
            <IoMdSettings />
          </IconContext.Provider>
        </button>
        <ResumeControls 
          displayPhone={displayPhone} togglePhone={togglePhone}
          displayCerts={displayCerts} toggleCerts={toggleCerts}
          rowsEducation={rowsEducation} changeRowsEducation={changeRowsEducation}
          rowsProjects={rowsProjects} changeRowsProjects={changeRowsProjects}
          rowsInternships={rowsInternships} changeRowsInternships={changeRowsInternships}
          rowsCocurriculars={rowsCocurriculars} changeRowsCocurriculars={changeRowsCocurriculars}
          displayAchievements={displayAchievements} toggleAchievements={toggleAchievements}
          displayResponsibilities={displayResponsibilities} toggleResponsibilities={toggleResponsibilities}
          displayExtracurriculars={displayExtracurriculars} toggleExtracurriculars={toggleExtracurriculars}
          displayHobbies={displayHobbies} toggleHobbies={toggleHobbies}
          displayLanguages={displayLanguages} toggleLanguages={toggleLanguages}
        />
        <button className="feedback-btn" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <IconContext.Provider value={{color: "#005BA2", size: "5vh"}}>
            <MdMessage />
          </IconContext.Provider>
        </button>
        <Feedback />

      </div>
      <div className='resume-print'>
        <div>
          <li>Keep Your Resume limited to 1 page only</li>
          <li>Make sure to change paper-size to A4</li>
          <li>Include background-graphics</li>
        </div>
        <button onClick={handlePrint}>
          <IconContext.Provider value={{color:"#fff", size:"2.5vh"}}>
            <FaPrint />
          </IconContext.Provider>
          Print Resume</button>
      </div>
    </div>
  );
}

export default ResumeManager;
