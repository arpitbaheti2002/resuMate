import React from 'react';
import './resumeControl.css';

function ResumeControls( {
    displayPhone, togglePhone, rowsEducation, changeRowsEducation, rowsSkills, changeRowsSkills, rowsExperience, 
    changeRowsExperience
  }) {

  const handleCheckboxChange = (func, val) => {
    func(!val);
  };

  function handleChange(e, item, val) {
    const storedResume = localStorage.getItem('maangresume');
    let resumeData = {};

    if (storedResume) {
      resumeData = JSON.parse(storedResume);
    }

    if (item === "displayPhone") {
      resumeData.displayPhone = !val;
    } else if (item === "rowsEducation") {
      resumeData.rowsEducation = val;
    } else if (item === "rowsSkills") {
      resumeData.rowsSkills = val;
    } else if (item === "rowsExperience") {
      resumeData.rowsExperience = val;
    }
      
    localStorage.setItem('maangresume', JSON.stringify(resumeData));
  }

  const handleClearForm = () => {
    localStorage.removeItem('maangresume');
    window.location.reload();
  };

  return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasRightLabel">Controls</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
      </div>
      <div className='offcanvas-content'>
        <label>
          <input
            className='check-box'
            type="checkbox"
            checked={displayPhone}
            onChange={(e) => {handleCheckboxChange(togglePhone, displayPhone); handleChange(e, 'displayPhone', displayPhone)}}
          />
          Display Phone Number
        </label>
        <label>
          <input
            type="number"
            className="number-input"
            value={rowsEducation}
            onChange={(e) => {changeRowsEducation(e.target.value); handleChange(e, 'rowsEducation', e.target.value)}}
          />
          Number of Rows in Education
        </label>
        <label>
          <input
            type="number"
            className="number-input"
            value={rowsSkills}
            onChange={(e) => {changeRowsSkills(e.target.value); handleChange(e, 'rowsSkills', e.target.value)}}
          />
          Number of Rows in Skills
        </label>
        <label>
          <input
            type="number"
            className="number-input"
            value={rowsExperience}
            onChange={(e) => {changeRowsExperience(e.target.value); handleChange(e, 'rowsExperience', e.target.value)}}
          />
          Number of Rows in Experience
        </label>


        <button className="clear-button" onClick={handleClearForm}>Clear Form</button>
      </div>
    </div>
  )
}

export default ResumeControls;
