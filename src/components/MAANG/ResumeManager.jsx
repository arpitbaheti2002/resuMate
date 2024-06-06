import React, {useState, useEffect} from 'react';
import Header from '../Header/Header';
import Resume from './Resume';
import ResumeControls from './ResumeControls';
import Feedback from '../Feedback/Feedback';
import './maang-resume.css';

import { IconContext } from 'react-icons';
import { IoMdSettings } from "react-icons/io";
import { FaPrint } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";

function ResumeManager() {
  const [displayPhone, togglePhone] = useState(true);
  const [rowsEducation, changeRowsEducation] = useState(3);
  const [rowsSkills, changeRowsSkills] = useState(3);

  useEffect(() => {
    const storedResume = localStorage.getItem('maangresume');
    if (storedResume) {
      const resumeData = JSON.parse(storedResume);
      togglePhone(resumeData.displayPhone === undefined ? true : resumeData.displayPhone);
      changeRowsEducation(resumeData.rowsEducation || 3);
      changeRowsSkills(resumeData.rowsSkills || 3);
    }
  }, []);

  const handlePrint = () => {
    document.body.style.zoom = "100%";
    window.print();
  };

  return (
    <div>
      <Header name="MAANG Format"/>
      <div className='resume-container'>
        <Resume 
          displayPhone={displayPhone}
          rowsEducation={rowsEducation}
          rowsSkills={rowsSkills}
        />
        <button className="resume-control-btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
          <IconContext.Provider value={{color: "#005BA2", size: "5vh"}}>
            <IoMdSettings />
          </IconContext.Provider>
        </button>
        <ResumeControls 
          displayPhone={displayPhone} togglePhone={togglePhone}
          rowsEducation={rowsEducation} changeRowsEducation={changeRowsEducation}
          rowsSkills={rowsSkills} changeRowsSkills={changeRowsSkills}
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
  )
}

export default ResumeManager
