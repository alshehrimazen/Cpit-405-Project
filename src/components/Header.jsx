import React from "react";
import { Link } from "react-router-dom"; 
import "./css/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="auth-buttons">
        <button className="btn login">Login</button>
        <button className="btn signup">Sign Up</button>
      </div>

      <nav className="nav">
        <Link to="/planner" className="nav-btn">The Plan</Link>
        <Link to="/" className="nav-btn">How to Perform Umrah</Link> 
      </nav>

      <div className="profile">Account</div>
    </header>
  );
};

export default Header;
