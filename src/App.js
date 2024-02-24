import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ResumeManager from "./components/VITResume/ResumeManager";
import './App.css';
import MobilePage from "./components/MobilePage/MobilePage";

function App() {
  
  return (
    <div className="App">
      {/* {window.innerWidth>700?  */}
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/VITResume" element={<ResumeManager />} />
        </Routes>
      </BrowserRouter>
       {/* :<MobilePage /> */}
    {/* } */}
    </div> 
    
  );
}

export default App;
