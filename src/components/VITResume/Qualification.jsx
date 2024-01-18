import React, { useState } from 'react'

function Qualification(props) {
  const [technicalSkills, setTechnicalSkills] = useState('');
  const [certifications, setCertifications] = useState('');

  return (
    <div className='qualifications'>
      <label htmlFor="technical-skills">Technical Skills:</label>
      <input id='technical-skills' value={technicalSkills} onChange={(e) => setTechnicalSkills(e.target.value)}/>
      {props.displayCerts ?
        <div>
          <label htmlFor="certifications">Certifications:</label>
          <br />
          <div id='certifications' contentEditable="true" onChange={(e) => setCertifications(e.target.value)}>{certifications}</div>
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
          <td className='bold' style={{width:"4.2cm"}}>Tenure</td>
          <td className='bold' style={{width:"8.35cm"}}>Educational Institution</td>
          <td className='bold' style={{width:"3.78cm"}}>CGPA/Percentage</td>
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
