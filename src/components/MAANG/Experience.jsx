import React, { useState, useEffect } from "react";

function Experience(props) {
  const [experienceData, setExperienceData] = useState(() => {
    return Array.from({ length: props.rowsExperience }, () => ({
      title: "",
      company: "",
      tenure: "",
      location: "",
      description: "",
    }));
  });

  useEffect(() => {
    // Update experienceData only if the length of props.rowsExperience changes
    if (props.rowsExperience !== experienceData.length) {
      setExperienceData(prevExperienceData => {
        const newExperienceData = Array.from({ length: props.rowsExperience }, (value, index) => {
          if (index < prevExperienceData.length) {
            return prevExperienceData[index];
          } else {
            return {
                title: '',
                company: '',
                tenure: '',
                location:'',
                description: ''
            };
          }
        });
        return newExperienceData;
      });
    }
  }, [props.rowsExperience, experienceData.length]);

  useEffect(() => {
    const storedResume = localStorage.getItem('maangresume');
    if (storedResume) {
      const resumeData = JSON.parse(storedResume);
      setExperienceData(resumeData.experienceData || experienceData);
    }
  }, []);

  function handleChangeExperience(e, index, field) {
    const updatedExperienceData = [...experienceData];
    if(field!=='description') {
      updatedExperienceData[index][field] = e.target.value;
    } else {
      updatedExperienceData[index][field] = e.target.textContent;
    }
    setExperienceData(updatedExperienceData);

    const storedResume = JSON.parse(localStorage.getItem('maangresume')) || {};

    const updatedResumeData = {
      ...storedResume,
      experienceData: updatedExperienceData
    };
    localStorage.setItem('maangresume', JSON.stringify(updatedResumeData));
  }

  return (
    props.rowsExperience > 0 && (
    <div className="maang-experience">
      <h2 className="section-heading">EXPERIENCE</h2>
      <hr className="horizontal-rule" />
      <table>
        {Array.from({ length: props.rowsExperience }, (_, index) => (
          <div key={index} className="experience-unit">
            <tr>
              <td>
                <input
                  style={{ width: "13cm", fontWeight: "600" }}
                  placeHolder="Internship Title #1"
                  value={experienceData[index]?experienceData[index].title:''}
                  onChange={(e) => handleChangeExperience(e, index, "title")}
                ></input>
              </td>
              <td>
                <input
                  style={{ width: "6.4cm", textAlign: "right" }}
                  placeHolder="Month Year - Month Year"
                  value={experienceData[index]?experienceData[index].tenure:''}
                  onChange={(e) => handleChangeExperience(e, index, "tenure")}
                ></input>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  className="italics"
                  style={{ width: "13cm" }}
                  placeHolder="Company Name"
                  value={experienceData[index]?experienceData[index].company:''}
                  onChange={(e) => handleChangeExperience(e, index, "company")}
                ></input>
              </td>
              <td>
                <input
                  className="italics"
                  style={{ width: "6.4cm", textAlign: "right" }}
                  placeHolder="City, Country"
                  value={experienceData[index]?experienceData[index].location:''}
                  onChange={(e) => handleChangeExperience(e, index, "location")}
                ></input>
              </td>
            </tr>
            <div id='achievements' contentEditable="true" style={{width: '18.8cm'}} onBlur={(e) => {handleChangeExperience(e, index, 'description')}}>
              {experienceData[index]?experienceData[index].description:null}
            </div>
          </div>
        ))}
      </table>
    </div>
  ));
}

export default Experience;
