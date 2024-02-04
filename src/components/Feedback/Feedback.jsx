import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import './feedback.css';

function Feedback() {
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('green');
  const [value, setValue] = useState(2);

  const submitFeedback = async (event) => {
    event.preventDefault();
    const currentDate = new Date().toISOString().split('T')[0];

    let url = 'https://api.sheety.co/943e441392e49c0529e49ced204ab673/resuMateFeedback/feedbacks';
    let body = {
      feedback: {
        date: currentDate,
        feedback: feedback,
        rating: value,
      },
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        setMessage('Submitted Successfully');
        setFeedback('');
        setColor('green');
        setValue(2); // Reset the rating to the default value
        setTimeout(() => {
          setMessage('');
        }, 5000);
      } else {
        setMessage('Error submitting feedback');
        setColor('red');
        setTimeout(() => {
          setMessage('');
        }, 5000);
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">How Satisfied are you with the Resu Mate?</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Rating
                name="hover-feedback"
                value={value}
                precision={1}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
              <Box sx={{ ml: 2 }}>{value === 1 ? 'Poor' : value === 2 ? 'Fair' : value === 3 ? 'Average' : value === 4 ? 'Good' : 'Excellent'}</Box>
            </Box>
            <div style={{ marginTop: '1vw' }}></div>
            <textarea rows={3} value={feedback} onChange={(e) => setFeedback(e.target.value)} />
          </div>
          <div className="modal-footer">
            <span style={{ color: color }} val={message}>{message}</span>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-send" onClick={submitFeedback}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
