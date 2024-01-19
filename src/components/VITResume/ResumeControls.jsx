import React from 'react';

function ResumeControls({ 
    displayPhone, togglePhone, displayCerts, toggleCerts, rowsEducation, changeRowsEducation, rowsProjects, changeRowsProjects,
    rowsInternships, changeRowsInternships, rowsCocurriculars, changeRowsCocurriculars
  }) {

  const handleCheckboxChange = (func, val) => {
    func(!val);
  };

  return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <label>
        <input
          type="checkbox"
          checked={displayPhone}
          onChange={() => handleCheckboxChange(togglePhone, displayPhone)}
        />
        Display Phone Number
      </label>
      <label>
        <input
          type="checkbox"
          checked={displayCerts}
          onChange={() => handleCheckboxChange(toggleCerts, displayCerts)}
        />
        Display Certifications
      </label>
      <label>
        <input
          type="number"
          value={rowsEducation}
          onChange={(e) => changeRowsEducation(e.target.value)}
        />
        Number of Rows in Education
      </label>
      <label>
        <input
          type="number"
          value={rowsProjects}
          onChange={(e) => changeRowsProjects(e.target.value)}
        />
        Number of Rows in Projects
      </label>
      <label>
        <input
          type="number"
          value={rowsInternships}
          onChange={(e) => changeRowsInternships(e.target.value)}
        />
        Number of Internships
      </label>
      <label>
        <input
          type="number"
          value={rowsCocurriculars}
          onChange={(e) => changeRowsCocurriculars(e.target.value)}
        />
        Number of rows in Co-curriculars
      </label>
    </div>
  )
}

export default ResumeControls;
