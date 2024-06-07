import React, {useState, useEffect} from 'react';

function Education(props) {
  const [educationData, setEducationData] = useState(() => {
    return Array.from({ length: props.rowsEducation }, () => ({
      degree: '',
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
              degree: '',
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
    const storedResume = localStorage.getItem('maangresume');
    if (storedResume) {
      const resumeData = JSON.parse(storedResume);
      setEducationData(resumeData.educationData || educationData);
    }
  }, []);

  function handleChangeEducation(e, index, field)  {
    const updatedEducationData = [...educationData];

    updatedEducationData[index][field] = e.target.value;
    setEducationData(updatedEducationData);
    
    const storedResume = JSON.parse(localStorage.getItem('maangresume')) || {};

    const updatedResumeData = {
      ...storedResume,
      educationData: updatedEducationData
    };
    localStorage.setItem('maangresume', JSON.stringify(updatedResumeData));
  };

  return (
    <div className='maang-education'>
      <h2 className='section-heading'>EDUCATION</h2>    
      <hr className='horizontal-rule'/>  

      <table>
        {Array.from({ length: props.rowsEducation }, (_, index) => (
          <div key={index} className='education-unit'>
            <tr>
              <td><input style={{width:'13cm', fontWeight:'600'}} placeHolder="Degree & Field of Study" value={educationData[index]?educationData[index].degree:''} onChange={(e) => handleChangeEducation(e, index, 'degree')}></input></td>
              <td><input style={{width:'6.4cm', textAlign:'right'}} placeHolder="Month Year - Month Year" value={educationData[index]?educationData[index].tenure:''} onChange={(e) => handleChangeEducation(e, index, 'tenure')}></input></td>
            </tr>
            <tr>
              <td><input className='italics' style={{width:'13cm'}} placeHolder="InstitutionName, City/Country/Remote" value={educationData[index]?educationData[index].institution:''} onChange={(e) => handleChangeEducation(e, index, 'institution')}></input></td>
              <td><input className='italics' style={{width:'6.4cm', textAlign:'right'}} placeHolder="Percentage / CGPA" value={educationData[index]?educationData[index].cgpa:''} onChange={(e) => handleChangeEducation(e, index, 'cgpa')}></input></td>
            </tr>
          </div>
        ))}
      </table>
    </div>
  )
}

export default Education;