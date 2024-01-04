import React from 'react';
import { IconContext } from 'react-icons';
import { IoMdSettings } from "react-icons/io";
import Header from '../Header/Header';
import Resume from './Resume';
import './vitResume.css';
import ResumeControls from './ResumeControls';

function ResumeManager() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <Header />
      <div className='resume-container'>
        <Resume />
        <button class="resume-control-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
          <IconContext.Provider value={{color: "#00ab41", size: "6vh"}}>
            <IoMdSettings />
          </IconContext.Provider>
        </button>
        <ResumeControls />

      </div>
      <div className='resume-print'>
        <p>Make sure to change paper-size to A4</p>
        <button onClick={handlePrint}>Print Resume</button>
      </div>
    </div>
  );
}

export default ResumeManager;
