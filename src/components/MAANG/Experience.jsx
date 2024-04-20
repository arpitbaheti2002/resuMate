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

  // useEffect(() => {
  //   // Update experienceData only if the length of props.rowsExperience changes
  //   if (props.rowsExperience !== experienceData.length) {
  //     setExperienceData(prevExperienceData => {
  //       const newExperienceData = Array.from({ length: props.rowsExperience }, (value, index) => {
  //         if (index < prevExperienceData.length) {
  //           return prevExperienceData[index];
  //         } else {
  //           return {
  //               title: '',
  //               company: '',
  //               tenure: '',
  //               location:'',
  //               description: ''
  //           };
  //         }
  //       });
  //       return newExperienceData;
  //     });
  //   }
  // }, [props.rowsExperience, experienceData.length]);

  // useEffect(() =>{
  //   localStorage.setItem('maangresume',JSON.stringify({ experienceData}));
  // }, [experienceData]);

  // useEffect(() => {
  //   const storedResume = localStorage.getItem('maangresume');
  //   if (storedResume) {
  //     const resumeData = JSON.parse(storedResume);
  //     setExperienceData(resumeData.experienceData || experienceData);
  //   }
  // }, []);

  function handleChangeExperience(e, index, field) {
    const updatedExperienceData = [...experienceData];
    updatedExperienceData[index][field] = e.target.value;
    console.log(updatedExperienceData);
    setExperienceData(updatedExperienceData);

    // const storedResume = JSON.parse(localStorage.getItem('maangresume')) || {};

    // const updatedResumeData = {
    //   ...storedResume,
    //   experienceData: updatedExperienceData
    // };
    // localStorage.setItem('maangresume', JSON.stringify(updatedResumeData));
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      // Prevent default behavior of creating a new list item
      e.preventDefault();

      // Get the selection range
      const selection = window.getSelection();
      const range = selection.getRangeAt(0);

      // Create a new list item with a bullet point
      const listItem = document.createElement("li");
      listItem.appendChild(document.createTextNode("\u2022 ")); // Bullet point character

      // Insert the new list item
      range.insertNode(listItem);

      // Move the cursor to the end of the new list item
      range.setStart(listItem, 0);
      range.setEnd(listItem, 0);
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }

  return (
    <div className="maang-experience">
      <h2 className="section-heading">EXPERIENCE</h2>
      <hr className="horizontal-rule" />
      {/* <table>
      <div>
        <tr>
            <td><input style={{width:'13cm', fontWeight:'600'}} placeHolder="Internship Title #1"></input></td>
            <td><input style={{width:'6.4cm', textAlign:'right'}} placeHolder="Month Year - Month Year"></input></td>
        </tr>
        <tr>
            <td><input className='italics' style={{width:'13cm'}} placeHolder="CompanyName"></input></td>
            <td><input className='italics' style={{width:'6.4cm', textAlign:'right'}} placeHolder="City, Country"></input></td>
        </tr>
      </div>
      <div>
        <tr>
            <td className='info-experience' ><input placeholder='Description'style = {{width:'19.4cm'}}></input></td>
            
            </tr>
            <tr>
            <td><li><input placeholder='Description' style = {{width:'18.8cm'}}></input></li></td>
            </tr>
            </div>
          </table> */}
      <table>
        {Array.from({ length: props.rowsExperience }, (_, index) => (
          <div key={index} className="experience-unit">
            <tr>
              <td>
                <input
                  style={{ width: "13cm", fontWeight: "600" }}
                  placeHolder="Internship Title #1"
                  value={experienceData[index].title}
                  onChange={(e) => handleChangeExperience(e, index, "title")}
                ></input>
              </td>
              <td>
                <input
                  style={{ width: "6.4cm", textAlign: "right" }}
                  placeHolder="Month Year - Month Year"
                  value={experienceData[index].tenure}
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
                  value={experienceData[index].company}
                  onChange={(e) => handleChangeExperience(e, index, "company")}
                ></input>
              </td>
              <td>
                <input
                  className="italics"
                  style={{ width: "6.4cm", textAlign: "right" }}
                  placeHolder="City, Country"
                  value={experienceData[index].location}
                  onChange={(e) => handleChangeExperience(e, index, "location")}
                ></input>
              </td>
            </tr>
            <div id='achievements' contentEditable="true" style={{width: '18.8cm'}} onBlur={(e) => {handleChangeExperience(e, 'description')}}></div>
            {/* <tr>
              <td className="info-experience"colSpan={2}>
                <div
                  id="experience-description"
                  contentEditable="true"
                  onBlur={(e) => {
                    handleChangeExperience(e, "description");
                  }}
                  className="info-experience"
                ></div>
              </td>
            </tr> */}
            {/* <li><input contentEditable='true' style={{width:"18.8cm"}}></input></li> */}
          </div>
        ))}
      </table>
    </div>
  );
}

export default Experience;
