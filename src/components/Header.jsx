import React from "react";
import "./css/Header.css"; 

const Header = () => {
  return (
    <header className="header">
      <div className="auth-buttons">
        <button className="btn login">Login</button>
        <button className="btn signup">Sign Up</button>
      </div>

      <nav className="nav">
        <button className="nav-btn">The Plan</button>
        <button className="nav-btn">How to Perform Umrah</button>
      </nav>

      <div className="profile">Account</div>
    </header>
  );
};

export default Header;
