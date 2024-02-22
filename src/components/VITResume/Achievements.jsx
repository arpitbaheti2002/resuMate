import React, { useEffect } from 'react'

function Achievements(props) {
  useEffect(() => {
    const storedResume = localStorage.getItem('vitresume');
    if (storedResume) {
      const resumeData = JSON.parse(storedResume);
      document.querySelector('#achievements').innerHTML = resumeData.achievements|| '';
      document.querySelector('#responsibilities').innerHTML = resumeData.responsibilities|| '';
      document.querySelector('#extracurriculars').innerHTML = resumeData.extracurriculars|| '';
    }
  }, []);

  const handleChange = (e, item) => {
    const storedResume = localStorage.getItem('vitresume');
    let resumeData = {};

    if (storedResume) {
      resumeData = JSON.parse(storedResume);
    }

    if (item === "achievements") {
      resumeData.achievements = e.target.innerHTML;
    } else if (item === "responsibilities") {
      resumeData.responsibilities = e.target.innerHTML;
    } else if (item === "extracurriculars") {
      resumeData.extracurriculars = e.target.innerHTML;
    } 

    localStorage.setItem('vitresume', JSON.stringify(resumeData));
  };
  
  return (
    (props.displayAchievements || props.displayResponsibilities || props.displayExtracurriculars)?
    <div className='achievements-container'>
      <table>
        <tr>
          <th className='bg-gray bold table-header' colSpan={2}>EXTRA-CURRICULARS AND ACHIEVEMENTS</th>
        </tr>
        {props.displayAchievements?
        <tr>
          <td className='bg-gray' style={{width:"2.8cm"}}>Achievements</td>
          <td className='achievements-details' style={{ width: "16.73cm" }}>
            <div id='achievements' contentEditable="true" onBlur={(e) => {handleChange(e, 'achievements')}}></div>
          </td>
        </tr>
        :<></>}
        {props.displayResponsibilities?
        <tr>
          <td className='bg-gray' style={{width:"2.8cm"}}>Responsibilities</td>
          <td className='achievements-details' style={{ width: "16.73cm" }}>
            <div id='responsibilities' contentEditable="true" onBlur={(e) => {handleChange(e, 'responsibilities')}}></div>
          </td>
        </tr>
        : <></>}
        {props.displayExtracurriculars?
        <tr>
          <td className='bg-gray' style={{width:"2.8cm"}}>Extracurriculars</td>
          <td className='achievements-details' style={{ width: "16.73cm" }}>
            <div id='extracurriculars' contentEditable="true" onBlur={(e) => {handleChange(e, 'extracurriculars')}}></div>
          </td>
        </tr>
        :<></>}
      </table>
    </div>
    :<></>

  )
}

export default Achievements;
