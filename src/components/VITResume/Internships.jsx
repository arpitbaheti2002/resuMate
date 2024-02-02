import React, { useState, useEffect } from 'react';

function Internships(props) {
  const [internshipData, setInternshipData] = useState(Array.from({ length: props.rowsInternships }, () => ({
    company: '',
    position: '',
    achievement: '',
    description: '',
  })));

  useEffect(() => {
    if (props.rowsInternships !== internshipData.length) {
      setInternshipData(prevInternshipData => {
        const newInternshipData = Array.from({ length: props.rowsInternships }, (value, index) => {
          if (index < prevInternshipData.length) {
            return prevInternshipData[index];
          } else {
            return {
              company: '',
              position: '',
              achievement: '',
              description: '', 
            };
          }
        });
        return newInternshipData;
      });
    }
  }, [props.rowsInternships, internshipData.length]);

  useEffect(() => {
    const storedResume = localStorage.getItem('vitresume');
    if (storedResume) {
      const resumeData = JSON.parse(storedResume);
      setInternshipData(resumeData.internshipData || internshipData);
    }
  }, []);

  const handleChangeInternship = (e, index, field) => {
    const updatedInternshipData = [...internshipData];
    updatedInternshipData[index][field] = e.target.textContent;
    setInternshipData(updatedInternshipData);

    const storedResume = JSON.parse(localStorage.getItem('vitresume')) || {};
    const updatedResumeData = {
      ...storedResume,
      internshipData: updatedInternshipData
    };
    localStorage.setItem('vitresume', JSON.stringify(updatedResumeData));
  };

  return (
    props.rowsInternships > 0 ?
      <div className='internships'>
        <table>
          <tr>
            <th className='bg-gray bold table-header' colSpan={2}>INTERNSHIP</th>
          </tr>

          {Array.from({ length: props.rowsInternships }, (_, index) => (
            <tr key={index}>
              <td className='bg-gray' style={{width:"2.8cm"}} contentEditable="true" placeholder="Company and Tenure" onBlur={(e) => handleChangeInternship(e, index, 'company')}>{internshipData[index]? internshipData[index]['company']:''}</td>
              <td className='internship-details' style={{width:"16.73cm"}}>
                <div className='bold' contentEditable="true" placeholder="Position" onBlur={(e) => handleChangeInternship(e, index, 'position')}>
                  {internshipData[index] ? internshipData[index]['position'] : ''}
                </div>
                <div className='display-list' contentEditable="true" placeholder="- Achievement" onBlur={(e) => handleChangeInternship(e, index, 'achievement')}>
                  {internshipData[index] ? internshipData[index]['achievement'] : ''}
                </div>
                <div className='display-list' contentEditable="true" placeholder="- Description" onBlur={(e) => handleChangeInternship(e, index, 'description')}>
                  {internshipData[index] ? internshipData[index]['description'] : ''}
                </div>               
              </td>
            </tr>
          ))}
        </table>
      </div>
      : null
  );
}

export default Internships;
