import React, { useState, useEffect } from 'react'

function Qualification(props) {
  const [technicalSkills, setTechnicalSkills] = useState('');
 
  useEffect(() => {
    const storedResume = localStorage.getItem('vitresume');
    if (storedResume) {
      const resumeData = JSON.parse(storedResume);
      setTechnicalSkills(resumeData.skills || '');
      document.querySelector('#certifications').innerHTML = resumeData.certifications;
    }
  }, []);

  const handleChange = (e, item) => {
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
            <td className='bg-gray' contentEditable="true" placeholder="PG/ UG/ XII/ X"></td>
            <td contentEditable="true" placeholder="Month 20XX"></td>
            <td contentEditable="true" placeholder="Institution Name, place"></td>
            <td contentEditable="true" ></td>  
          </tr>
        ))}
      </table>
    </div>

  )
}

export default Qualification
