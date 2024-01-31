import React, { useEffect, useState} from 'react';

function General(props) {
  const [imageLink, changeImg] = useState('https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg');
  const [name, setName] = useState('');
  const [RegNo, setRegNo] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [portfolio_site, setPortfolioSite] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [gitHub, setGitHub] = useState('');
  const [displayEditor, toggleEditor] = useState(false);

  useEffect(() => {
    const storedResume = localStorage.getItem('vitresume');
    if (storedResume) {
      const resumeData = JSON.parse(storedResume);
      setName(resumeData.name || '');
      changeImg(resumeData.profile_img || 'https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg')
      setRegNo(resumeData.regNo || '')
      setEmail(resumeData.email || '')
      setPhone(resumeData.phone || '')
      setPortfolioSite(resumeData.portfolio || '')
      setLinkedin(resumeData.linkedin || '')
      setGitHub(resumeData.github || '')
    }
  }, []);

  const handleChange = (e, item) => {
   
    const storedResume = localStorage.getItem('vitresume');
    let resumeData = {};

    if (storedResume) {
      resumeData = JSON.parse(storedResume);
    }

    if (item === "image") {
      resumeData.profile_img = e.target.result;
    } else if (item === "name") {
      resumeData.name = e.target.value;
    } else if (item === "regNo") {
      resumeData.regNo = e.target.value;
    } else if (item === "email") {
      resumeData.email = e.target.value;
    } else if (item === "phone") {
      resumeData.phone= e.target.value;
    } else if (item === "portfolio") {
      resumeData.portfolio= e.target.value;
    } else if (item === "linkedin") {
      resumeData.linkedin= e.target.value;
    } else if (item === "github") {
      resumeData.github= e.target.value;
    }


    localStorage.setItem('vitresume', JSON.stringify(resumeData));
  };
 

  const handleImageChange = (e) => {
    const file = e.target.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = (event) => {
        const imageDataUrl = event.target.result;
        changeImg(imageDataUrl); 
        handleChange(event, "image");
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
      <div>
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
        <div>
          <input 
            className='name'
            value={name}
            onChange={(e) => {setName(e.target.value); handleChange(e, 'name');}}
            placeholder='Full Name' 
          />
        </div>
      </div>
      <div className='info-container' onClick={handleClick}>
        <p>Registration Number: {RegNo}</p>
        <p>Email: {email}</p>
        {props.displayPhone?
          <p>Phone: {phone}</p>
          :null
        }
        {(portfolio_site.length) > 0 ? 
          <p><a href={portfolio_site}>{portfolio_site}</a></p>
          :null
        }
        <p><a href={linkedin}>{linkedin}</a></p>
        <p><a href={gitHub}>{gitHub}</a></p>
      </div>

      {displayEditor?
        <div className='info-editor'>
          <input
            value={RegNo}
            onChange={(e) => {setRegNo(e.target.value); handleChange(e, 'regNo')}}
            placeholder='Registration Number'
          />
          <br />
          <input
            value={email}
            onChange={(e) => {setEmail(e.target.value); handleChange(e, 'email')}}
            placeholder='Email'
          />
          <br />
          {props.displayPhone?
            <>
              <input
                value={phone}
                onChange={(e) => {setPhone(e.target.value); handleChange(e, 'phone')}}
                placeholder='Phone number'
              />
              <br />
            </>
            : null
          }
          <input
            value={portfolio_site}
            onChange={(e) => {setPortfolioSite(e.target.value); handleChange(e, 'portfolio')}}
            placeholder='Portfolio site (optional)'
          />
          <br />
          <input
            value={linkedin}
            onChange={(e) => {setLinkedin(e.target.value); handleChange(e, 'linkedin')}}
            placeholder='LinkedIn'
          />
          <br />
          <input
            value={gitHub}
            onChange={(e) => {setGitHub(e.target.value); handleChange(e, 'github')}}
            placeholder='GitHub'
          />
          <br />
        </div>
        : null
      }
    </div>
  );
}

export default General;
