import React from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { useAuth } from "./contexts/AuthContext"; 
import "./css/Header.css";

const Header = () => {
  const { logout } = useAuth(); 
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout(); 
      navigate('/'); 
    } catch (error) {
      console.error('Failed to logout', error);
    }
  };

  return (
    <header className="header">
      <div className="auth-buttons">
        <button className="btn logout" onClick={handleLogout}>Log Out</button>
      </div>

      <nav className="nav">
        <Link to="/home" className="nav-btn">Home</Link> 
        <Link to="/planner" className="nav-btn">The Plan</Link>
        <Link to="/umrah-guide" className="nav-btn">How to Perform Umrah</Link> 
      </nav>
    </header>
  );
};

export default Header;
