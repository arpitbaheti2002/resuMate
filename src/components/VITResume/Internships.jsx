import React from 'react';

function Internships(props) {

  return (
    props.rowsInternships > 0 ?
      <div className='internships'>
        <table>
          <tr>
            <th className='bg-gray bold table-header' colSpan={2}>INTERNSHIP</th>
          </tr>

          {Array.from({ length: props.rowsInternships }, (_, index) => (
            <tr key={index}>
              <td className='bg-gray' style={{width:"2.8cm"}} contentEditable="true" placeholder="Company and Tenure"></td>
              <td className='internship-details' style={{width:"16.73cm"}}>
                <div className='bold' contentEditable="true" placeholder="Position"></div>
                <div className='display-list' contentEditable="true" placeholder="- Achievement"></div>
                <div className='display-list' contentEditable="true" placeholder="- Description"></div>               
              </td>
            </tr>
          ))}
        </table>
      </div>
      : null
  );
}

export default Internships;
