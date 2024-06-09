import React, { useState, useEffect, useRef } from "react";

function Certifications(props) {
  const [certificationsData, setCertificationsData] = useState(() => {
    return Array.from({ length: props.rowsCertifications }, () => ({
      name: "",
      duration: "",
      organisation: "",
    }));
  });

  useEffect(() => {
    // Update certificationsData only if the length of props.rowsCertifications changes
    if (props.rowsCertifications !== certificationsData.length) {
      setCertificationsData((prevCertificationsData) => {
        const newCertificationsData = Array.from(
          { length: props.rowsCertifications },
          (value, index) => {
            if (index < prevCertificationsData.length) {
              return prevCertificationsData[index];
            } else {
              return {
                name: "",
                duration: "",
                organisation: "",
              };
            }
          }
        );
        return newCertificationsData;
      });
    }
  }, [props.rowsCertifications, certificationsData.length]);

  useEffect(() => {
    const storedResume = localStorage.getItem("maangresume");
    if (storedResume) {
      const resumeData = JSON.parse(storedResume);
      setCertificationsData(
        resumeData.certificationsData || certificationsData
      );
    }
  }, []);
  function handleChangeCertifications(e, index, field) {
    const updatedCertificationsData = [...certificationsData];
    if (field !== "organisation") {
      updatedCertificationsData[index][field] = e.target.value;
    } else {
      updatedCertificationsData[index][field] = e.target.textContent;
    }
    setCertificationsData(updatedCertificationsData);

    const storedResume = JSON.parse(localStorage.getItem("maangresume")) || {};

    const updatedResumeData = {
      ...storedResume,
      certificationsData: updatedCertificationsData,
    };
    localStorage.setItem("maangresume", JSON.stringify(updatedResumeData));
  }
  // Variable Length code starts
//   const CertificationNameInput = ({ value, index }) => {
//     const [inputWidth, setInputWidth] = useState("6.5cm");
//     const [inputValue, setInputValue] = useState(value);
//     const spanRef = useRef(null);

//     useEffect(() => {
//       if (spanRef.current) {
//         spanRef.current.textContent = inputValue || "Certification Name";
//         const newWidth = spanRef.current.offsetWidth + 2;
//         setInputWidth(`${newWidth}px`);
//       }
//     }, [inputValue]);

//     return (
//       <>
//         <input
//           className="dynamic-width-input"
//           style={{ width: inputWidth }}
//           placeholder="Certification Name"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           onBlur={(e) =>
//             handleChangeCertifications(e, index, "name", inputValue)
//           }
//         />
//         <span ref={spanRef} className="hidden-span" />
//       </>
//     );
//   };
  // Variable Length code ends

  return (
    props.rowsCertifications > 0 && (
      <div className="maang-project">
        <h2 className="section-heading">CERTIFICATIONS</h2>
        <hr className="horizontal-rule" />
        <table>
          {Array.from({ length: props.rowsCertifications }, (_, index) => (
            <div key={index} className="project-unit">
              <tr>
                <td>
                  {/* <CertificationNameInput value={certificationsData[index]? certificationsData[index].name: ""}index={index}/> */}
                  <input
                  style={{ width: "13cm", fontWeight: "600" }}
                  placeHolder="Certification Name"
                  value={certificationsData[index]?certificationsData[index].name:''}
                  onChange={(e) => handleChangeCertifications(e, index, "name")}
                ></input>
                </td>
                <td>
                  <input
                    style={{ width: "6.4cm", textAlign: "right" }}
                    placeHolder="Month Year - Month Year"
                    value={
                      certificationsData[index]
                        ? certificationsData[index].duration
                        : ""
                    }
                    onChange={(e) =>
                      handleChangeCertifications(e, index, "duration")
                    }
                  ></input>
                </td>
              </tr>
              {/* <div id='achievements' contentEditable="true" style={{width: '18.8cm'}} onBlur={(e) => {handleChangeCertifications(e, index, 'organisation')}}>
              {certificationsData[index]?certificationsData[index].organisation:null}
            </div> */}
            </div>
          ))}
        </table>
      </div>
    )
  );
}

export default Certifications;
