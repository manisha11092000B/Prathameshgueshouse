import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Guest House</div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#Hero">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#Gallery">Gallery</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>

      <div 
        className="menu-icon" 
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>
    </nav>
  );
};

export default Navbar;