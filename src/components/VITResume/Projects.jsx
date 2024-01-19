import React, { useState } from 'react';

function Projects(props) {
  // Create an array of state values, one for each project
  const [teamProjectVisibility, setTeamProjectVisibility] = useState(Array(props.rowsProjects).fill(true));

  function toggleVisibility(index) {
    const newVisibility = [...teamProjectVisibility];
    newVisibility[index] = !newVisibility[index];
    setTeamProjectVisibility(newVisibility);
  }

  return (
    <div className='projects'>
      <table>
        <tr>
          <th className='bg-gray bold table-header' colSpan={2}>ACADEMIC PROJECT</th>
        </tr>

        {Array.from({ length: props.rowsProjects }, (_, index) => (
          <tr key={index}>
            <td className='bg-gray' style={{width:"2.8cm"}} contentEditable="true" placeholder="Project Domain"></td>
            <td className='project-details' style={{width:"16.3cm"}}>
              <div className='bold' contentEditable="true" placeholder="Project Title"></div>
              <div contentEditable="true"> - Description: </div>
              <div contentEditable="true"> - Technology: </div>
              <div id={`teamProject${index}`} style={{ display: teamProjectVisibility[index] ? 'block' : 'none' }}>
                <div contentEditable="true"> - Team Project: </div>
                <div contentEditable="true"> - Role: </div>
              </div>
              <div contentEditable="true"> - Links & Results: </div>
              
              <div className='team-project'>
                <input
                  type='checkbox'
                  onChange={() => toggleVisibility(index)}
                  checked={teamProjectVisibility[index]}
                />
                <label>Team Project</label>
              </div>
              
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Projects;
