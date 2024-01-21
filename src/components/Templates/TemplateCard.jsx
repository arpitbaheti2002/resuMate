import React from 'react';
import { useNavigate } from 'react-router-dom';

function TemplateCard(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(props.link);
  };

  return (
    <div className='template-card' onClick={handleClick}>
      <div className='template-image'>
        <img src={props.image_link} alt="format" />
      </div>
      <div className='template-name'>
        <p>{props.name}</p>
      </div>
    </div>
  )
}

export default TemplateCard
