import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Resume from "./components/VITResume/Resume";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/VITResume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
