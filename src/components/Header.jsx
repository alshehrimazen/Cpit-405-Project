import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import { FiLogOut } from "react-icons/fi";
import "./css/Header.css";

const Header = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const [confirmVisible, setConfirmVisible] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      localStorage.clear();
      navigate('/');
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/planner" className="nav-link">The Plan</Link>
        <Link to="/umrah-guide" className="nav-link">How to Perform Umrah</Link>
        <Link to="/yourplan" className="nav-link">Your Plan</Link>
      </nav>

      <div className="logout-container">
        <FiLogOut className="logout-icon" size={22} onClick={() => setConfirmVisible(true)} />
        {confirmVisible && (
          <div className="logout-popup">
            <p>Are you sure you want to log out?</p>
            <div className="popup-buttons">
              <button onClick={handleLogout}>Yes</button>
              <button onClick={() => setConfirmVisible(false)}>No</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
