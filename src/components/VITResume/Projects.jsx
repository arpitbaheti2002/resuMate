import React, { useState } from 'react'
import './vitResume.css'

function Projects(props) {
  function toggleVisibility(id) {
    const element = document.getElementById(id);
    if (element.style.display === 'none') {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }

  return (
    <div className='projects'>
      {/* Projects */}
      <table>
        <tr>
          <th className='bg-gray bold table-header' colSpan={4}>Academic Projects</th>
        </tr>

        {Array.from({ length: props.rowsProjects }, (_, index) => (
          <tr key={index}>
            <td className='bg-gray' style={{width:"2.8cm"}} contentEditable="true" placeholder="Project Domain"></td>
            <td className='project-details' style={{width:"16.3cm"}}>
              <div className='bold' contentEditable="true" placeholder="Project Title"></div>
              <div contentEditable="true"> - Description: </div>
              <div contentEditable="true"> - Technology: </div>
              <div id={`teamProject${index}`} style={{ display: 'block' }}>
                <div contentEditable="true"> - Team Project: </div>
                <div contentEditable="true"> - Role: </div>
              </div>
              <div contentEditable="true"> - Links & Results: </div>
              
              <button type='checkbox' className='team-project' onClick={() => toggleVisibility(`teamProject${index}`)}>Team Project</button>
              
            </td>
          </tr>
        ))}
      </table>
    </div>

  )
}

export default Projects