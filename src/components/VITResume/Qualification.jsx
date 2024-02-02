import React, { useState, useEffect } from 'react'

function Qualification(props) {
  const [technicalSkills, setTechnicalSkills] = useState('');
  const [educationData, setEducationData] = useState(() => {
    return Array.from({ length: props.rowsEducation }, () => ({
      board: '',
      tenure: '',
      institution: '',
      cgpa: ''
    }));
  });

  useEffect(() => {
    // Update educationData only if the length of props.rowsEducation changes
    if (props.rowsEducation !== educationData.length) {
      setEducationData(prevEducationData => {
        const newEducationData = Array.from({ length: props.rowsEducation }, (value, index) => {
          if (index < prevEducationData.length) {
            return prevEducationData[index];
          } else {
            return {
              board: '',
              tenure: '',
              institution: '',
              cgpa: ''
            };
          }
        });
        return newEducationData;
      });
    }
  }, [props.rowsEducation, educationData.length]);
  
 
  useEffect(() => {
    const storedResume = localStorage.getItem('vitresume');
    if (storedResume) {
      const resumeData = JSON.parse(storedResume);
      setTechnicalSkills(resumeData.skills || '');
      document.querySelector('#certifications').innerHTML = resumeData.certifications || '';
      setEducationData(resumeData.educationData || educationData);
    }
  }, []);

  const handleChange = (e, item, index) => {
    const storedResume = localStorage.getItem('vitresume');
    let resumeData = {};

    if (storedResume) {
      resumeData = JSON.parse(storedResume);
    }

    if (item === "skills") {
      resumeData.skills = e.target.value;
    } else if (item === "certificates") {
      resumeData.certifications = e.target.innerHTML;
    } 

    localStorage.setItem('vitresume', JSON.stringify(resumeData));
  };

  function handleChangeEducation(e, index, field)  {
    const updatedEducationData = [...educationData];
    updatedEducationData[index][field] = e.target.textContent;
    setEducationData(updatedEducationData);
    
    const storedResume = JSON.parse(localStorage.getItem('vitresume')) || {};

    const updatedResumeData = {
      ...storedResume,
      educationData: updatedEducationData
    };
    localStorage.setItem('vitresume', JSON.stringify(updatedResumeData));
  };

  return (
    <div className='qualifications'>
      <label htmlFor="technical-skills">Technical Skills:</label>
      <input id='technical-skills' value={technicalSkills} onChange={(e) => {setTechnicalSkills(e.target.value); handleChange(e, 'skills')}}/>
      {props.displayCerts ?
        <div>
          <label htmlFor="certifications">Certifications:</label>
          <br />
          <div id='certifications' contentEditable="true" onBlur={(e) => {handleChange(e, 'certificates')}}></div>
        </div>
        : null
      }
      {/* Education */}
      <table>
        <tr>
          <th className='bg-gray bold table-header' colSpan={4}>EDUCATION</th>
        </tr>
        <tr>
          <td className='bg-gray bold' style={{width:"2.8cm"}}>Board</td>
          <td className='bold' style={{width:"4.3cm"}}>Tenure</td>
          <td className='bold' style={{width:"8.55cm"}}>Educational Institution</td>
          <td className='bold' style={{width:"3.88cm"}}>CGPA/Percentage</td>
        </tr>

        {Array.from({ length: props.rowsEducation }, (_, index) => (
          <tr key={index}>
            <td className='bg-gray' contentEditable="true" placeholder="PG/ UG/ XII/ X" onBlur={(e) => handleChangeEducation(e, index, 'board')}>{educationData[index]?educationData[index]['board']:''}</td>
            <td contentEditable="true" placeholder="Month 20XX" onBlur={(e) => handleChangeEducation(e, index, 'tenure')}>{educationData[index]?educationData[index]['tenure']:''}</td>
            <td contentEditable="true" placeholder="Institution Name, Place" onBlur={(e) => handleChangeEducation(e, index, 'institution')}>{educationData[index]?educationData[index]['institution']:''}</td>
            <td contentEditable="true" onBlur={(e) => handleChangeEducation(e, index, 'cgpa')}>{educationData[index]?educationData[index]['cgpa']:''}</td>
          </tr>
        ))}
      </table>
    </div>

  )
}

export default Qualification
