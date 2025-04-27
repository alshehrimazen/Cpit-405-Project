import React from "react";
import "./css/Home.css";

const Home = ({ onStart }) => {
  return (
    <div className="home-page">
      <div className="home-overlay">
        <h1 className="home-title">Safar Umrah Planner</h1>
        <p className="home-subtitle">
          Plan your spiritual journey to the holy city of Makkah with our personalized Umrah planner.
          Get recommendations for accommodation, transportation, and historical sites.
        </p>
        <button className="home-button" onClick={onStart}>+ Create a Plan</button>
      </div>
    </div>
  );
};

export default Home;
