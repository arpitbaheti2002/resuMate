import React, { useState, useRef } from 'react';

function General(props) {
  const [imageLink, changeImg] = useState('https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg');
  const [RegNo, setRegNo] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [displayEditor, toggleEditor] = useState(false);

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

  const handleClick = (e) => {
    // Check if the click is on an input element
    if (e.target.tagName.toLowerCase() === 'input') {
      // Click is on the input, do not toggle
    } else {
      // Click is not on the input, toggle the editor
      toggleEditor(!displayEditor);
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
      <div className='info-container' onClick={handleClick}>
        <p>Registration Number: {RegNo}</p>
        <input
          value={RegNo}
          onChange={(e) => setRegNo(e.target.value)}
          placeholder='Registration Number'
          style={{ display: displayEditor ? "inline" : "none" }}
        />
        <br />
        <p>Email: {email}</p>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
          style={{ display: displayEditor ? "inline" : "none" }}
        />
        <br />
        {props.displayPhone?
          <>
            <p>Phone: {phone}</p>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder='Phone'
              style={{ display: displayEditor ? "inline" : "none" }}
              />
            </>
          :""
        }
      </div>
    </div>
  );
}

export default General;
