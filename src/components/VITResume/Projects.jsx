import React, { useState, useEffect } from 'react';

function Projects(props) {
  // Create an array of state values, one for each project
  const [teamProjectVisibility, setTeamProjectVisibility] = useState(Array(props.rowsProjects).fill(true));
  const [projectDeployed, setProjectDeployed] = useState(Array(props.rowsProjects).fill(true));
  const [projectData, setProjectData] = useState(Array.from({ length: props.rowsProjects }, () => ({
    domain: '',
    title: '',
    description: '- Description: ',
    technology: '- Technology: ',
    teamMem: '- Team Project: ',
    role: '- Role: ',
    results: '- Results: ' ,
    link: ''
  })));

  useEffect(() => {
    // Update projectsData if the length of props.rowsProjects changes
    if (props.rowsProjects !== projectData.length) {
      setProjectData(prevProjectData => {
        const newProjectData = Array.from({ length: props.rowsProjects }, (value, index) => {
          if (index < prevProjectData.length) {
            return prevProjectData[index];
          } else {
            return {
              domain: '',
              title: '',
              description: '- Description: ',
              technology: '- Technology: ',
              teamMem: '- Team Project: ',
              role: '- Role: ',
              results: '- Results: ',
              link: ''
            };
          }
        });
        return newProjectData;
      });
    }
  }, [props.rowsProjects, projectData.length]);   

  useEffect(() => {
    const storedResume = localStorage.getItem('vitresume');
    if (storedResume) {
      const resumeData = JSON.parse(storedResume);
      setProjectData(resumeData.projectData || projectData);
      setTeamProjectVisibility(resumeData.teamProject || teamProjectVisibility);
      setProjectDeployed(resumeData.projectDeployed || projectDeployed);
    }
  }, []);

  const handleChangeProject = (e, index, field) => {
    const updatedProjectData = [...projectData];
    updatedProjectData[index][field] = e.target.textContent;
    setProjectData(updatedProjectData);

    const storedResume = JSON.parse(localStorage.getItem('vitresume')) || {};
    const updatedResumeData = {
      ...storedResume,
      projectData: updatedProjectData
    };
    localStorage.setItem('vitresume', JSON.stringify(updatedResumeData));
  };

  function toggleVisibility(index) {
    const newVisibility = [...teamProjectVisibility];
    newVisibility[index] = !newVisibility[index];
    setTeamProjectVisibility(newVisibility);

    const storedResume = JSON.parse(localStorage.getItem('vitresume')) || {};
    const updatedResumeData = {
      ...storedResume,
      teamProject: newVisibility
    };
    localStorage.setItem('vitresume', JSON.stringify(updatedResumeData));
  }

  function toggleLink(index) {
    const newDeployed = [...projectDeployed];
    newDeployed[index] = !newDeployed[index];
    setProjectDeployed(newDeployed);

    const storedResume = JSON.parse(localStorage.getItem('vitresume')) || {};
    const updatedResumeData = {
      ...storedResume,
      projectDeployed: newDeployed
    };
    localStorage.setItem('vitresume', JSON.stringify(updatedResumeData));
  }

  return (
    <div className='projects'>
      <table>
        <tr>
          <th className='bg-gray bold table-header' colSpan={2}>ACADEMIC PROJECT</th>
        </tr>

        {Array.from({ length: props.rowsProjects }, (_, index) => (
          <tr key={index}>
            <td className='bg-gray' style={{width:"2.8cm"}} contentEditable="true" placeholder="Project Domain" onBlur={(e) => handleChangeProject(e, index, 'domain')}>{projectData[index]? projectData[index]['domain']:''}</td>
            <td className='project-details' style={{width:"16.73cm"}}>
              <div className='bold' contentEditable="true" placeholder="Project Title" onBlur={(e) => handleChangeProject(e, index, 'title')}>{projectData[index]? projectData[index]['title']:''}</div>
              <div contentEditable="true" onBlur={(e) => handleChangeProject(e, index, 'description')}>
                {projectData[index] ? projectData[index]['description'] : '- Description: '}
              </div>

              <div contentEditable="true" onBlur={(e) => handleChangeProject(e, index, 'technology')}>
                {projectData[index] ? projectData[index]['technology'] : '- Technology: '}
              </div>

              <div id={`teamProject${index}`} style={{ display: teamProjectVisibility[index] ? 'block' : 'none' }}>
                <div contentEditable="true" onBlur={(e) => handleChangeProject(e, index, 'teamMem')}>
                  {projectData[index] ? projectData[index]['teamMem'] : '- Team Project: '}
                </div>
                <div contentEditable="true" onBlur={(e) => handleChangeProject(e, index, 'role')}>
                  {projectData[index] ? projectData[index]['role'] : '- Role: '}
                </div>
              </div>
              <div contentEditable="true" onBlur={(e) => handleChangeProject(e, index, 'results')}>
                {projectData[index] ? projectData[index]['results'] : '- Results: '}
              </div>
              <div id={`projectDeployed${index}`} style={{ display: projectDeployed[index] ? 'block' : 'none' }}>
                <div>
                  <span>- Link: </span>
                  <a href={projectData[index]? projectData[index]['link']:''}  style={{width: "14cm", display: "inline-block"}}
                    contentEditable="true" onBlur={(e) => handleChangeProject(e, index, 'link')}>
                    {projectData[index] ? projectData[index]['link'] : ''}
                  </a>
                </div>
              </div>
              
              <div className='team-project'>
                <div>
                  <input
                    className='check-box'
                    type='checkbox'
                    onChange={() => toggleVisibility(index)}
                    checked={teamProjectVisibility[index]}
                  />
                  <label>Team Project</label>
                </div>
                <div>
                  <input
                    className='check-box'
                    type='checkbox'
                    onChange={() => toggleLink(index)}
                    checked={projectDeployed[index]}
                  />
                  <label>Deployed</label>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Projects;
