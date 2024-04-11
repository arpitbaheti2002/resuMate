import React, {useState, useEffect} from 'react';

function Experience(props) {
  const [experienceData, setExperienceData] = useState(() => {
    return Array.from({ length: props.rowsExperience }, () => ({
      degree: '',
      tenure: '',
      institution: '',
      cgpa: ''
    }));
  });

  useEffect(() => {
    // Update experienceData only if the length of props.rowsExperience changes
    if (props.rowsExperience !== experienceData.length) {
      setExperienceData(prevExperienceData => {
        const newExperienceData = Array.from({ length: props.rowsExperience }, (value, index) => {
          if (index < prevExperienceData.length) {
            return prevExperienceData[index];
          } else {
            return {
              board: '',
              tenure: '',
              institution: '',
              cgpa: ''
            };
          }
        });
        return newExperienceData;
      });
    }
  }, [props.rowsExperience, experienceData.length]);

  useEffect(() => {
    const storedResume = localStorage.getItem('maangresume');
    if (storedResume) {
      const resumeData = JSON.parse(storedResume);
      setExperienceData(resumeData.experienceData || experienceData);
    }
  }, []);

  function handleChangeExperience(e, index, field)  {
    const updatedExperienceData = [...experienceData];
    console.log(updatedExperienceData)
    updatedExperienceData[index][field] = e.target.value;
    setExperienceData(updatedExperienceData);
    
    const storedResume = JSON.parse(localStorage.getItem('maangresume')) || {};

    const updatedResumeData = {
      ...storedResume,
      experienceData: updatedExperienceData
    };
    localStorage.setItem('maangresume', JSON.stringify(updatedResumeData));
  };

  return (
    <div className='maang-experience'>
      <h2 className='section-heading'>EXPERIENCE</h2>    
      <hr className='horizontal-rule'/>  
      <table>
      <div>
        <tr>
            <td><input style={{width:'13cm', fontWeight:'600'}} placeHolder="Internship Title #1"></input></td>
            <td><input style={{width:'6.4cm', textAlign:'right'}} placeHolder="Month Year - Month Year"></input></td>
        </tr>
        <tr>
            <td><input className='italics' style={{width:'13cm'}} placeHolder="CompanyName"></input></td>
            <td><input className='italics' style={{width:'6.4cm', textAlign:'right'}} placeHolder="City, Country"></input></td>
        </tr>
      </div>
      <div>
        <tr>
            <td className='info-experience' ><input placeholder='Description'style = {{width:'19.4cm'}}></input></td>
            
        </tr>
        <tr>
            <td><li><input placeholder='Description' style = {{width:'18.8cm'}}></input></li></td>
        </tr>
      </div>
      </table>
      {/* <table>
        {Array.from({ length: props.rowsExperience }, (_, index) => (
          <div key={index} className='experience-unit'>
            
            <tr>
              <td><input style={{width:'13cm', fontWeight:'600'}} placeHolder="Degree & Field of Study" value={experienceData[index].degree} onChange={(e) => handleChangeExperience(e, index, 'degree')}></input></td>
              <td><input style={{width:'6.4cm', textAlign:'right'}} placeHolder="Month Year - Month Year" value={experienceData[index].tenure} onChange={(e) => handleChangeExperience(e, index, 'tenure')}></input></td>
            </tr>
            <tr>
              <td><input className='italics' style={{width:'13cm'}} placeHolder="InstitutionName, City/Country/Remote" value={experienceData[index].institution} onChange={(e) => handleChangeExperience(e, index, 'institution')}></input></td>
              <td><input className='italics' style={{width:'6.4cm', textAlign:'right'}} placeHolder="Percentage / CGPA" value={experienceData[index].cgpa} onChange={(e) => handleChangeExperience(e, index, 'cgpa')}></input></td>
            </tr>
          </div>
        ))}
      </table> */}
    </div>
  )
}

export default Experience;
