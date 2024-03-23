import React, { useEffect, useState } from 'react';
import General from './General';


function Resume(props) {
  const [isWarning, setIsWarning] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const resumeContainer = document.getElementById('maang-resume');
      const containerHeight = resumeContainer.clientHeight;
      
      setIsWarning(containerHeight > 1123);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="maang-resume" className={`resume a4-page`}>
      {isWarning?
      <>
        <hr className='warning-line'/>
        <p className='warning-message'>Single page</p>
      </>
      :<></>}
      <General displayPhone={props.displayPhone}/>
      
    </div>
  )
}

export default Resume;
