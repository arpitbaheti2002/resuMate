import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { IoMdSettings } from "react-icons/io";
import { FaPrint } from "react-icons/fa6";
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

  useState(() => {
    const handleBeforeUnload = (event) => {
      const message = "Leaving this page will discard your changes. Are you sure, you want to reload?";
      event.returnValue = message; // Standard for most browsers
      return message; // For some older browsers
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
        />

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
