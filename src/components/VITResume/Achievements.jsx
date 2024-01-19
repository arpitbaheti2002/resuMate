import React from 'react'

function Achievements(props) {
  return (
    <div className='achievements'>
      <table>
        <tr>
          <th className='bg-gray bold table-header' colSpan={2}>EXTRA-CURRICULARS AND ACHIEVEMENTS</th>
        </tr>
        <tr>
          <td className='bg-gray' style={{width:"2.8cm"}}>Achievements</td>
          <td className='achievements-details' style={{ width: "16.3cm" }}>
            <ul contentEditable="true">
              <li>Each achievement in newline</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td className='bg-gray' style={{width:"2.8cm"}}>Responsibilities</td>
          <td className='achievements-details' style={{ width: "16.3cm" }}>
            <ul contentEditable="true">
              <li>Each responsibility in newline</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td className='bg-gray' style={{width:"2.8cm"}}>Extracurriculars</td>
          <td className='achievements-details' style={{ width: "16.3cm" }}>
            <ul contentEditable="true">
              <li>Each extracurricular in newline</li>
            </ul>
          </td>
        </tr>
      </table>
    </div>

  )
}

export default Achievements;
