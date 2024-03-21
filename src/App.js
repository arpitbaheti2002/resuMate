import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import VITResumeManager from "./components/VITResume/ResumeManager";
import MAANGResumeManager from "./components/MAANG/ResumeManager";
import './App.css';

function App() {
  
  return (
    <div className="App">
      {/* {window.innerWidth>700?  */}
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/VITResume" element={<VITResumeManager />} />
          <Route path="/MAANGFormat" element={<MAANGResumeManager/>} />
        </Routes>
      </BrowserRouter>
       {/* :<MobilePage /> */}
    {/* } */}
    </div> 
    
  );
}

export default App;
