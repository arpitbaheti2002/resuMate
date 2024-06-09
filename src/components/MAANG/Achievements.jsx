import React, { useState, useEffect, useRef } from "react";

function Achievements(props) {
  const [achievementsData, setAchievementsData] = useState(() => {
    return Array.from({ length: props.rowsAchievements }, () => ({
      desc: "",
    }));
  });

  useEffect(() => {
    // Update achievementsData only if the length of props.rowsAchievements changes
    if (props.rowsAchievements !== achievementsData.length) {
      setAchievementsData((prevAchievementsData) => {
        const newAchievementsData = Array.from(
          { length: props.rowsAchievements },
          (value, index) => {
            if (index < prevAchievementsData.length) {
              return prevAchievementsData[index];
            } else {
              return {
                desc: "",
              };
            }
          }
        );
        return newAchievementsData;
      });
    }
  }, [props.rowsAchievements, achievementsData.length]);

  useEffect(() => {
    const storedResume = localStorage.getItem("maangresume");
    if (storedResume) {
      const resumeData = JSON.parse(storedResume);
      setAchievementsData(
        resumeData.achievementsData || achievementsData
      );
    }
  }, []);
  function handleChangeAchievements(e, index, field) {
    const updatedAchievementsData = [...achievementsData];
    if (field !== "desc") {
      updatedAchievementsData[index][field] = e.target.value;
    } else {
      updatedAchievementsData[index][field] = e.target.textContent;
    }
    setAchievementsData(updatedAchievementsData);

    const storedResume = JSON.parse(localStorage.getItem("maangresume")) || {};

    const updatedResumeData = {
      ...storedResume,
      achievementsData: updatedAchievementsData,
    };
    localStorage.setItem("maangresume", JSON.stringify(updatedResumeData));
  }

  return (
    props.rowsAchievements > 0 && (
      <div className="maang-achievement">
        <h2 className="section-heading">ACHIEVEMENTS</h2>
        <hr className="horizontal-rule" />
        <table>
          {Array.from({ length: props.rowsAchievements }, (_, index) => (
            <div key={index} className="achievement-unit">
              <div id='achievements' contentEditable="true" style={{width: '18.8cm'}} onBlur={(e) => {handleChangeAchievements(e, index, 'desc')}}>
              {achievementsData[index]?achievementsData[index].desc:null}
            </div>
            </div>
          ))}
        </table>
      </div>
    )
  );
}

export default Achievements;
