import React from 'react';
import './resumeControl.css';

function ResumeControls() {

  const handleCheckboxChange = (func, val) => {
    func(!val);
  };

  function handleChange(e, item, val) {
    const storedResume = localStorage.getItem('maangresume');
    let resumeData = {};

    if (storedResume) {
      resumeData = JSON.parse(storedResume);
    }

    // if (item === "displayPhone") {
    //   resumeData.displayPhone = !val;
    // }
      
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
        {/* <label>
          <input
            className='check-box'
            type="checkbox"
            checked={displayPhone}
            onChange={(e) => {handleCheckboxChange(togglePhone, displayPhone); handleChange(e, 'displayPhone', displayPhone)}}
          />
          Display Phone Number
        </label> */}
        {/* <label>
          <input
            type="number"
            className="number-input"
            value={rowsEducation}
            onChange={(e) => {changeRowsEducation(e.target.value); handleChange(e, 'rowsEducation', e.target.value)}}
          />
          Number of Rows in Education
        </label> */}
        
        <button className="clear-button" onClick={handleClearForm}>Clear Form</button>
      </div>
    </div>
  )
}

export default ResumeControls;
