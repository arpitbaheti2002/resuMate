import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { IoMdSettings } from "react-icons/io";
import Header from '../Header/Header';
import Resume from './Resume';
import './vitResume.css';
import ResumeControls from './ResumeControls';

function ResumeManager() {
  const [displayPhone, togglePhone] = useState(true);
  const [displayCerts, toggleCerts] = useState(true);
  const [rowsEducation, changeRowsEducation] = useState(3);
  const [rowsProjects, changeRowsProjects] = useState(2);
  const [rowsInternships, changeRowsInternships] = useState(1);
  const [rowsCocurriculars, changeRowsCocurriculars] = useState(1);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <Header />
      <div className='resume-container'>
        <Resume 
          displayPhone={displayPhone} 
          displayCerts={displayCerts}
          rowsEducation={rowsEducation}
          rowsProjects={rowsProjects}
          rowsInternships={rowsInternships}
          rowsCocurriculars={rowsCocurriculars}
        />
        <button className="resume-control-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
          <IconContext.Provider value={{color: "#00ab41", size: "6vh"}}>
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
        />

      </div>
      <div className='resume-print'>
        <p>Make sure to change paper-size to A4</p>
        <button onClick={handlePrint}>Print Resume</button>
      </div>
    </div>
  );
}

export default ResumeManager;
