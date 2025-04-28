import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Home from "./components/Home";
import Planner from "./components/Planner";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planner" element={<Planner />} />
      </Routes>
    </div>
  );
}

export default App;
