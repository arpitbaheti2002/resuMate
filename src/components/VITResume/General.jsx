import React, { useState } from 'react';

function General() {
  const [imageLink, changeImg] = useState('https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg');
  const [RegNo, setRegNo] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const imageDataUrl = event.target.result;
        changeImg(imageDataUrl);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='general'>
      <div className='image-container'>
        <label htmlFor="uploadImage">
          <img src={imageLink} alt='user' />
        </label>
        <input
          type="file"
          id="uploadImage"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: 'none' }}
        />
      </div>
      <div className='info-container'>
        <label>Registration Number:</label>
        <input
          type="text"
          value={RegNo}
          onChange={(e) => setRegNo(e.target.value)}
          style={{ width: `${RegNo.length===0?1:RegNo.length}ch` }}
        />
      </div>
    </div>
  );
}

export default General;
