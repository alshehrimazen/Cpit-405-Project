import React, { useState } from "react";
import Home from "./components/Home";
import Planner from "./components/Planner";
import Header from "./components/Header"; 
import './App.css';

function App() {
  const [showPlanner, setShowPlanner] = useState(false);

  return (
    <div>
      <Header /> 
      {showPlanner ? (
        <Planner />
      ) : (
        <Home onStart={() => setShowPlanner(true)} />
      )}
    </div>
  );
}

export default App;
