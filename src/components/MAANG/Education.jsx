import React, { useState, useEffect } from 'react';

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
  }, [props.rowsEducation]);

  useEffect(() => {
    const storedResume = localStorage.getItem('maangresume');
    if (storedResume) {
      const resumeData = JSON.parse(storedResume);
      setEducationData(resumeData.educationData || educationData);
    }
  }, []);

  function handleChangeEducation(e, index, field) {
    const updatedEducationData = [...educationData];
    updatedEducationData[index][field] = e.target.value;
    setEducationData(updatedEducationData);
    
    const storedResume = JSON.parse(localStorage.getItem('maangresume')) || {};
    const updatedResumeData = {
      ...storedResume,
      educationData: updatedEducationData
    };
    localStorage.setItem('maangresume', JSON.stringify(updatedResumeData));
  }

  return (
    props.rowsEducation > 0 && (
      <div className='maang-education'>
        <h2 className='section-heading'>EDUCATION</h2>
        <hr className='horizontal-rule' />

        <table>
          <tbody>
            {educationData.map((edu, index) => (
              <React.Fragment key={index}>
                <tr>
                  <td>
                    <input
                      style={{ width: '13cm', fontWeight: '600' }}
                      placeholder="Degree & Field of Study"
                      value={edu.degree}
                      onChange={(e) => handleChangeEducation(e, index, 'degree')}
                    />
                  </td>
                  <td>
                    <input
                      style={{ width: '6.4cm', textAlign: 'right' }}
                      placeholder="Month Year - Month Year"
                      value={edu.tenure}
                      onChange={(e) => handleChangeEducation(e, index, 'tenure')}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      className='italics'
                      style={{ width: '13cm' }}
                      placeholder="InstitutionName, City/Country/Remote"
                      value={edu.institution}
                      onChange={(e) => handleChangeEducation(e, index, 'institution')}
                    />
                  </td>
                  <td>
                    <input
                      className='italics'
                      style={{ width: '6.4cm', textAlign: 'right' }}
                      placeholder="Percentage / CGPA"
                      value={edu.cgpa}
                      onChange={(e) => handleChangeEducation(e, index, 'cgpa')}
                    />
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    )
  );
}

export default Education;
