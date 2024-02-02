import React, { useState, useEffect } from 'react';

function Cocurriculars(props) {
  const [cocurricularsData, setCocurricularsData] = useState(Array.from({ length: props.rowsInternships }, () => ({
    area: '',
    status: ''
  })));

  useEffect(() => {
    if (props.rowsCocurriculars !== cocurricularsData.length) {
      setCocurricularsData(prevCocurricularsData => {
        const newCocurricularsData = Array.from({ length: props.rowsCocurriculars }, (value, index) => {
          if (index < prevCocurricularsData.length) {
            return prevCocurricularsData[index];
          } else {
            return {
              area: '',
              status: ''
            };
          }
        });
        return newCocurricularsData;
      });
    }
  }, [props.rowsCocurriculars, cocurricularsData.length]);

  useEffect(() => {
    const storedResume = localStorage.getItem('vitresume');
    if (storedResume) {
      const resumeData = JSON.parse(storedResume);
      setCocurricularsData(resumeData.cocurricularsData || cocurricularsData);
    }
  }, []);

  const handleChangeCocurriculars = (e, index, field) => {
    const updatedCocurricularsData = [...cocurricularsData];
    updatedCocurricularsData[index][field] = e.target.textContent;
    setCocurricularsData(updatedCocurricularsData);

    const storedResume = JSON.parse(localStorage.getItem('vitresume')) || {};
    const updatedResumeData = {
      ...storedResume,
      cocurricularsData: updatedCocurricularsData
    };
    localStorage.setItem('vitresume', JSON.stringify(updatedResumeData));
  };

  return (
    props.rowsCocurriculars > 0 ?
      <div className='cocurriculars'>
        <table>
          <tr>
            <th className='bg-gray bold table-header' colSpan={2}>CO-CURRICULARS</th>
          </tr>

          {Array.from({ length: props.rowsCocurriculars }, (_, index) => (
            <tr key={index}>
              <td className='bg-gray' style={{width:"2.8cm"}} contentEditable="true" placeholder="e.g. Coding" onBlur={(e) => handleChangeCocurriculars(e, index, 'area')}>
                {cocurricularsData[index]? cocurricularsData[index]['area']:''}
              </td>
              <td className='cocurriculars-details' style={{width:"16.73cm"}}>
                <div contentEditable="true" placeholder="Status (seperated by comas)" onBlur={(e) => handleChangeCocurriculars(e, index, 'status')}>
                  {cocurricularsData[index]? cocurricularsData[index]['status']:''}
                </div>          
              </td>
            </tr>
          ))}
        </table>
      </div>
      : null
  );
}

export default Cocurriculars;
