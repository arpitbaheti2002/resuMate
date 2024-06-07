import React, { useEffect, useState } from 'react';

function Skills(props) {
  const [skillsData, setSkillsData] = useState(() => {
    return Array.from({ length: props.rowsSkills }, () => ({
      domain: '',
      skills: ''
    }));
  });

  useEffect(() => {
    // Update skillsData only if the length of props.rowsSkills changes
    if (props.rowsSkills !== skillsData.length) {
      setSkillsData(prevSkillsData => {
        const newSkillsData = Array.from({ length: props.rowsSkills }, (value, index) => {
          if (index < prevSkillsData.length) {
            return prevSkillsData[index];
          } else {
            return {
              domain: '',
              skills: ''
            };
          }
        });
        return newSkillsData;
      });
    }
  }, [props.rowsSkills, skillsData.length]);

  useEffect(() => {
    const storedResume = localStorage.getItem('maangresume');
    if (storedResume) {
      const resumeData = JSON.parse(storedResume);
      setSkillsData(resumeData.skillsData || skillsData);
    }
  }, []);

  function handleChangeSkills(e, index, field)  {
    const updatedSkillsData = [...skillsData];
    
    updatedSkillsData[index][field] = e.target.textContent;
    setSkillsData(updatedSkillsData);
    
    const storedResume = JSON.parse(localStorage.getItem('maangresume')) || {};

    const updatedResumeData = {
      ...storedResume,
      skillsData: updatedSkillsData
    };
    localStorage.setItem('maangresume', JSON.stringify(updatedResumeData));
  };
  
  return (
    <div className='maang-skills'>
      <h2 className='section-heading' contentEditable='true'>CORE SKILLS</h2>    
      <hr className='horizontal-rule'/>  
      
      {Array.from({ length: props.rowsSkills }, (_, index) => (
        <div className='skillRow'>
          <p className='skillsHead' contentEditable='true' placeHolder={`SkillsSet ${index+1}`} onBlur={(e) => handleChangeSkills(e, index, 'domain')}>
            {skillsData[index] ? skillsData[index]['domain'] : ''}
          </p>
          <span>:</span> 
          <p className='skills' contentEditable='true' placeHolder='skill#1, skill#2, skills#3' onBlur={(e) => handleChangeSkills(e, index, 'skills')}>
            {skillsData[index] ? skillsData[index]['skills'] : ''}
          </p>  
        </div>
      ))}
    </div>
  );
}

export default Skills;
