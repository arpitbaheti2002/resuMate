import React from 'react';

function ResumeControls({ displayPhone, togglePhone }) {
  const handleCheckboxChange = () => {
    togglePhone(!displayPhone);
    console.log()
  };

  return (
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <label>
        <input
          type="checkbox"
          checked={displayPhone}
          onChange={handleCheckboxChange}
        />
        Display Phone Number
      </label>
    </div>
  )
}

export default ResumeControls;
