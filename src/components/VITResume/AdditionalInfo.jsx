import React, {useEffect} from 'react';

function AdditionalInfo(props) {
  useEffect(() => {
    const storedResume = localStorage.getItem('vitresume');
    if (storedResume) {
      const resumeData = JSON.parse(storedResume);
      document.querySelector('#hobbies').innerHTML = resumeData.hobbies|| '';
      document.querySelector('#languages').innerHTML = resumeData.languages|| '';
    }
  }, []);

  const handleChange = (e, item) => {
    const storedResume = localStorage.getItem('vitresume');
    let resumeData = {};

    if (storedResume) {
      resumeData = JSON.parse(storedResume);
    }

    if (item === "hobbies") {
      resumeData.hobbies = e.target.innerHTML;
    } else if (item === "languages") {
      resumeData.languages = e.target.innerHTML;
    }

    localStorage.setItem('vitresume', JSON.stringify(resumeData));
  };

  return (
    (props.displayHobbies || props.displayLanguages)?
    <div className='additional-info'>
      <table>
        <tr>
          <th className='bg-gray bold table-header' colSpan={2}>ADDITIONAL INFORMATION</th>
        </tr>
        {props.displayHobbies?
        <tr>
          <td className='bg-gray' style={{width:"2.8cm"}}>Hobbies</td>
          <td className='info-details' style={{ width: "16.73cm" }}>
            <div id='hobbies' contentEditable="true" onBlur={(e) => {handleChange(e, 'hobbies')}}></div>
          </td>
        </tr>
        :<></>}
        {props.displayLanguages?
        <tr>
          <td className='bg-gray' style={{width:"2.8cm"}}>Languages</td>
          <td className='info-details' style={{ width: "16.73cm" }}>
            <div id='languages' contentEditable="true" onBlur={(e) => {handleChange(e, 'languages')}}></div>
          </td>
        </tr>
        :<></>}
      </table>
    </div>
    :<></>
  )
}

export default AdditionalInfo;
