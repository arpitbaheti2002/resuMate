import React from 'react';

function AdditionalInfo(props) {
  return (
    <div className='additional-info'>
      <table>
        <tr>
          <th className='bg-gray bold table-header' colSpan={2}>ADDITIONAL INFORMATION</th>
        </tr>
        <tr>
          <td className='bg-gray' style={{width:"2.8cm"}}>Hobbies</td>
          <td className='info-details' style={{ width: "16.3cm" }}>
            <ul contentEditable="true">
              <li>Each Hobby in newline</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td className='bg-gray' style={{width:"2.8cm"}}>Languages</td>
          <td className='info-details' style={{ width: "16.73cm" }}>
            <ul contentEditable="true">
              <li>Enter known languages</li>
            </ul>
          </td>
        </tr>
      </table>
    </div>

  )
}

export default AdditionalInfo;
