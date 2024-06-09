import React, { useState, useEffect } from "react";

function Projects(props) {
  const [projectsData, setProjectsData] = useState(() => {
    return Array.from({ length: props.rowsProjects }, () => ({
      project_name: "",
      duration: "",
      description: "",
    }));
  });

  useEffect(() => {
    // Update projectsData only if the length of props.rowsProjects changes
    if (props.rowsProjects !== projectsData.length) {
      setProjectsData((prevProjectsData) => {
        const newProjectsData = Array.from(
          { length: props.rowsProjects },
          (value, index) => {
            if (index < prevProjectsData.length) {
              return prevProjectsData[index];
            } else {
              return {
                project_name: "",
                duration: "",
                description: "",
              };
            }
          }
        );
        return newProjectsData;
      });
    }
  }, [props.rowsProjects, projectsData.length]);

  useEffect(() => {
    const storedResume = localStorage.getItem('maangresume');
    if (storedResume) {
      const resumeData = JSON.parse(storedResume);
      setProjectsData(resumeData.projectsData || projectsData);
    }
  }, []);
  function handleChangeProjects(e, index, field) {
    const updatedProjectsData = [...projectsData];
    if(field!=='description') {
      updatedProjectsData[index][field] = e.target.value;
    } else {
      updatedProjectsData[index][field] = e.target.textContent;
    }
    setProjectsData(updatedProjectsData);

    const storedResume = JSON.parse(localStorage.getItem('maangresume')) || {};

    const updatedResumeData = {
      ...storedResume,
      projectsData: updatedProjectsData
    };
    localStorage.setItem('maangresume', JSON.stringify(updatedResumeData));
  }

  return (
    props.rowsProjects > 0 && (
    <div className="maang-project">
      <h2 className="section-heading">PROJECTS</h2>
      <hr className="horizontal-rule" />
      <table>
        {Array.from({ length: props.rowsProjects }, (_, index) => (
          <div key={index} className="project-unit">
            <tr>
              <td>
                <input
                  style={{ width: "13cm", fontWeight: "600" }}
                  placeHolder="Project Name"
                  value={projectsData[index]?projectsData[index].project_name:''}
                  onChange={(e) => handleChangeProjects(e, index, "project_name")}
                ></input>
              </td>
              <td>
                <input
                  style={{ width: "6.4cm", textAlign: "right" }}
                  placeHolder="Month Year - Month Year"
                  value={projectsData[index]?projectsData[index].duration:''}
                  onChange={(e) => handleChangeProjects(e, index, "duration")}
                ></input>
              </td>
            </tr>
            <div id='achievements' contentEditable="true" style={{width: '18.8cm'}} onBlur={(e) => {handleChangeProjects(e, index, 'description')}}>
              {projectsData[index]?projectsData[index].description:null}
            </div>
          </div>
        ))}
      </table>
    </div>
  ));
}

export default Projects;
