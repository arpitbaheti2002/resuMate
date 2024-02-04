import React, { useState } from 'react';
import './feedback.css';

function Feedback() {
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');
  const [color, setColor] = useState('green');

  const submitFeedback = async (event) => {
    event.preventDefault();
    const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
  
    let url = 'https://api.sheety.co/943e441392e49c0529e49ced204ab673/resuMateFeedback/feedbacks';
    let body = {
      feedback: {
        date: currentDate,
        feedback: feedback
      }
    };
  
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
  
      if (response.ok) {
        setMessage('Submitted Successfully');
        setFeedback('');
        setColor('green');
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
            <h1 className="modal-title fs-5" id="exampleModalLabel">Feedback</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <textarea rows={3} value={feedback} onChange={(e) => setFeedback(e.target.value)}/>
          </div>
          <div className="modal-footer">
            <span style={{color: color}} val={message}>{message}</span>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-send" onClick={submitFeedback}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback;