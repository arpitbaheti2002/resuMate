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
  const [ColsEducation, changeColsEducation] = useState(3);

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
          colsEducation={ColsEducation}
        />
        <button className="resume-control-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
          <IconContext.Provider value={{color: "#00ab41", size: "6vh"}}>
            <IoMdSettings />
          </IconContext.Provider>
        </button>
        <ResumeControls 
          displayPhone={displayPhone} togglePhone={togglePhone}
          displayCerts={displayCerts} toggleCerts={toggleCerts}
          ColsEducation={ColsEducation} changeColsEducation={changeColsEducation}
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
