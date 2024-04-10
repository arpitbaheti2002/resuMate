import React, { useEffect, useState } from 'react';

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(()=>{
    const storedResume = localStorage.getItem('maangresume');
    if(storedResume) {
      const resumeData = JSON.parse(storedResume);
      setSkills(resumeData.skills)
    }
  }, [])

  const addSkills = ((e) => {
    e.preventDefault();
    const newSkills = e.target.skill.value.trim()
    const newSkillsArray = [...skills, newSkills];

    if(newSkills.length !== 0) {
      setSkills(newSkillsArray)
        
      let storedResume = localStorage.getItem('maangresume');
      storedResume = JSON.parse(storedResume) || {};

      const updatedResumeData = {
        ...storedResume,
        skills: newSkillsArray
      }

      localStorage.setItem('maangresume', JSON.stringify(updatedResumeData))
    }

      e.target.skill.value = '';
  })

  const deleteSkill = ((index) => {
    const newSkills = skills.filter((_, i)=>i !== index);
    setSkills(newSkills)

    let storedResume = localStorage.getItem('maangresume');
    storedResume = JSON.parse(storedResume) || {};

    const updatedResumeData = {
      ...storedResume,
      skills: newSkills
    }

    localStorage.setItem('maangresume', JSON.stringify(updatedResumeData))
  })

  return (
    <div className='maang-skills'>
      <h2 className='section-heading'>CORE TECHNICAL SKILLS</h2>
      <hr className='horizontal-rule' />
      <div className='skills-container'>
        {skills.length === 0 ? (
          <>
            <li style={{color: 'grey'}} className='skill-item'>Skill#1</li>
            <li style={{color: 'grey'}} className='skill-item'>Skill#2</li>
            <li style={{color: 'grey'}} className='skill-item'>Skill#3</li>
          </>
        ) : (
          skills.map((skill, index) => (
            <li className='skill-item' key={index}>{skill} <span className='delete-btn' onClick={() => deleteSkill(index)}>⛔</span></li>
          ))
        )}
      </div>
      <form className='add-skills' onSubmit={addSkills}>
        <input name="skill" placeholder='Add Skills'></input>
        <button type='submit'>+</button>
      </form>
    </div>
  );
}

export default Skills;
