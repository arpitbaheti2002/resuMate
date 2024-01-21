import React from 'react';

function Cocurriculars(props) {

  return (
    props.rowsCocurriculars > 0 ?
      <div className='cocurriculars'>
        <table>
          <tr>
            <th className='bg-gray bold table-header' colSpan={2}>CO-CURRICULARS</th>
          </tr>

          {Array.from({ length: props.rowsCocurriculars }, (_, index) => (
            <tr key={index}>
              <td className='bg-gray' style={{width:"2.8cm"}} contentEditable="true" placeholder="e.g. Coding"></td>
              <td className='cocurriculars-details' style={{width:"16.73cm"}}>
                <div contentEditable="true" placeholder="Status (seperated by comas)"></div>          
              </td>
            </tr>
          ))}
        </table>
      </div>
      : null
  );
}

export default Cocurriculars;
