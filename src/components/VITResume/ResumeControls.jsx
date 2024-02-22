import React from 'react';
import './resumeControl.css';

function ResumeControls({ 
    displayPhone, togglePhone, displayCerts, toggleCerts, rowsEducation, changeRowsEducation, rowsProjects, changeRowsProjects,
    rowsInternships, changeRowsInternships, rowsCocurriculars, changeRowsCocurriculars, displayAchievements, toggleAchievements,
    displayResponsibilities, toggleResponsibilities, displayExtracurriculars, toggleExtracurriculars, displayHobbies, 
    toggleHobbies, displayLanguages, toggleLanguages
  }) {

  const handleCheckboxChange = (func, val) => {
    func(!val);
  };

  function handleChange(e, item, val) {
    const storedResume = localStorage.getItem('vitresume');
    let resumeData = {};

    if (storedResume) {
      resumeData = JSON.parse(storedResume);
    }

    if (item === "displayPhone") {
      resumeData.displayPhone = !val;
    } else if (item === "displayCerts") {
      resumeData.displayCerts = !val;
    } else if (item === "rowsEducation") {
      resumeData.rowsEducation = val;
    } else if (item === "rowsProjects") {
      resumeData.rowsProjects = val;
    } else if (item === "rowsInternships") {
      resumeData.rowsInternships = val;
    } else if (item === "rowsCocurriculars") {
      resumeData.rowsCocurriculars = val;
    } else if (item === "displayAchievements") {
      resumeData.displayAchievements = !val;
    } else if (item === "displayResponsibilities") {
      resumeData.displayResponsibilities = !val;
    } else if (item === "displayExtracurriculars") {
      resumeData.displayExtracurriculars = !val;
    } else if (item === "displayHobbies") {
      resumeData.displayHobbies = !val;
    } else if (item === "displayLanguages") {
      resumeData.displayLanguages = !val;
    }

    localStorage.setItem('vitresume', JSON.stringify(resumeData));
  }

  const handleClearForm = () => {
    localStorage.removeItem('vitresume');
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
            className='check-box'
            type="checkbox"
            checked={displayCerts}
            onChange={(e) => {handleCheckboxChange(toggleCerts, displayCerts); handleChange(e, 'displayCerts', displayCerts)}}
          />
          Display Certifications
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
            value={rowsProjects}
            onChange={(e) => {changeRowsProjects(e.target.value); handleChange(e, 'rowsProjects', e.target.value)}}
          />
          Number of Rows in Projects
        </label>
        <label>
          <input
            type="number"
            className="number-input"
            value={rowsInternships}
            onChange={(e) => {changeRowsInternships(e.target.value); handleChange(e, 'rowsInternships', e.target.value)}}
          />
          Number of Internships
        </label>
        <label>
          <input
            type="number"
            className="number-input"
            value={rowsCocurriculars}
            onChange={(e) => {changeRowsCocurriculars(e.target.value); handleChange(e, 'rowsCocurriculars', e.target.value)}}
          />
          Number of rows in Co-curriculars
        </label>
        <h5 className="offcanvas-title offcanvas-sub-title" id="offcanvasRightLabel">Achievements</h5>
        <label>
          <input
            className='check-box'
            type="checkbox"
            checked={displayAchievements}
            onChange={(e) => {handleCheckboxChange(toggleAchievements, displayAchievements); handleChange(e, 'displayAchievements', displayAchievements)}}
          />
          Display Achievements
        </label>
        <label>
          <input
            className='check-box'
            type="checkbox"
            checked={displayResponsibilities}
            onChange={(e) => {handleCheckboxChange(toggleResponsibilities, displayResponsibilities); handleChange(e, 'displayResponsibilities', displayResponsibilities)}}
          />
          Display Responsibilities
        </label>
        <label>
          <input
            className='check-box'
            type="checkbox"
            checked={displayExtracurriculars}
            onChange={(e) => {handleCheckboxChange(toggleExtracurriculars, displayExtracurriculars); handleChange(e, 'displayExtracurriculars', displayExtracurriculars)}}
          />
          Display Extracurriculars
        </label>

        <h5 className="offcanvas-title offcanvas-sub-title" id="offcanvasRightLabel">Additional Information</h5>
        <label>
          <input
            className='check-box'
            type="checkbox"
            checked={displayHobbies}
            onChange={(e) => {handleCheckboxChange(toggleHobbies, displayHobbies); handleChange(e, 'displayHobbies', displayHobbies)}}
          />
          Display Hobbies
        </label>
        <label>
          <input
            className='check-box'
            type="checkbox"
            checked={displayLanguages}
            onChange={(e) => {handleCheckboxChange(toggleLanguages, displayLanguages); handleChange(e, 'displayLanguages', displayLanguages)}}
          />
          Display Languages
        </label>
        <button className="clear-button" onClick={handleClearForm}>Clear Form</button>
      </div>
    </div>
  )
}

export default ResumeControls;
