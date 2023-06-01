import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  const siteName = "TextUtils";
  const [mode, toggleMode] = useState("dark");

  const toggleStyle = () => {
    if (mode === "light") {
      toggleMode("dark");
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      toggleMode("light");
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    }
  };

  return (
    <Router>
      <div>
        <Navbar title={siteName} mode={mode} toggleStyle={toggleStyle} />
        <Routes>
          <Route path="/" exact element={<TextForm heading="Enter the text to analyze below" mode={mode} />} />
          <Route path="/about" exact element={<About mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
