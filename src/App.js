import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ResumeManager from "./components/VITResume/ResumeManager";
import './App.css';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/VITResume" element={<ResumeManager />} />
        </Routes>
      </BrowserRouter>
    </div>   
  );
}

export default App;
