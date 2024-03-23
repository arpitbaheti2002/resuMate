import React from 'react';
import './homepage.css';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

function Homepage(props) {
    const navigate = useNavigate();
    const handleClick = (link) => {
        navigate(link);
    };

    const subtitle1 = Array.from("Elevate Your Profile Effortlessly");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
          opacity: 1,
          transition: { staggerChildren: 0.03, delayChildren: 0.04 * i + 1.5 },
        }),
      };
    
      const child = {
        visible: {
          opacity: 1,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
          },
        },
        hidden: {
          opacity: 0,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
          },
        },
      };

    return (
    <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5, type: "Inertia" }}
        className='homepage'> 
        <div className='content-container'>
            <div className='title-section'>
            <div className='home-page-title'>
                <motion.span className='blue-text'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                    duration: 1,
                    delay: 0.5
                }}>
                Resu 
                </motion.span>
                <motion.span className='black-text'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                    duration: 1,
                    delay: 1
                }}>
                Mate
                </motion.span>
            </div>
            
            <div className='subtitle'>
            <motion.div
                style={{ overflow: "hidden", display: "flex" }}
                variants={container}
                initial="hidden"
                animate="visible"
                >
                {subtitle1.map((letter, index) => (
                    <motion.span variants={child} key={index}>
                    {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                ))}
            </motion.div>
            <Typewriter
                options={{
                    strings: ['', 'Create, Edit, Download', 'VIT Format Ready'],
                    autoStart: true,
                    loop: true,
                    pauseFor: 2000
                }}
            />
            {/* <motion.div
                style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
                variants={container}
                initial="hidden"
                animate="visible"
                custom={subtitle1.length}
                >
                {subtitle2.map((letter, index) => (
                    <motion.span variants={child} key={index} custom={subtitle1.length}>
                    {letter === " " ? "\u00A0" : letter}
                    </motion.span>
                ))}
            </motion.div> */}
                
            </div>
            </div>
            <div className='feature-section'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ delay: 4, type: "spring", damping: 20, stiffness: 100 }} 
                >
                    <div className='feature-box'>
                        <div className='card' onClick={()=>handleClick('/VITResume')}>
                            <div className='feature-title'>VIT Format</div>
                        </div>
                    </div>
                </motion.div>
            {/* <div className='feature-box'>
                <div className='feature-title'>Auto<br/>Layout</div>
            </div>
            <div className='feature-box'>
                <div className='feature-title'>Create<br/>Now</div>
            </div> */}
            </div>
            <motion.div
                initial={{ opacity: 0, y: 50 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 4, type: "spring", damping: 20, stiffness: 100 }} 
                className='designer-info'
            >
                Brought to you by SCAB.
            </motion.div>
        </div>
    </motion.div>
    );
}

export default Homepage;
