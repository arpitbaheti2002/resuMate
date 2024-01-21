// Homepage.jsx
import React from 'react';
import './homepage.css';
import { useNavigate } from 'react-router-dom';

function Homepage(props) {
    const navigate = useNavigate();
    const handleClick = (link) => {
        navigate(link);
    };
    return (
        <div className='homepage'>
        <div className='content-container'>
            <div className='title-section'>
            <div className='title'>
                <span className='blue-text'>Resu </span>
                <span className='black-text'>Mate</span>
            </div>
            <div className='subtitle'>
                Elevate Your Profile Effortlessly<br/>Edit, Download, VIT Format Ready!
            </div>
            </div>
            <div className='feature-section'>
            <div className='feature-box'>
            <div className='card' onClick={()=>handleClick('/VITResume')}>
                <div className='feature-title'>VIT Format</div>
            </div>
            </div>
            {/* <div className='feature-box'>
                <div className='feature-title'>Auto<br/>Layout</div>
            </div>
            <div className='feature-box'>
                <div className='feature-title'>Create<br/>Now</div>
            </div> */}
            </div>
            <div className='designer-info'>
                Brought to you by SCAB.
            </div>
        </div>
    </div>
    );
}

export default Homepage;
