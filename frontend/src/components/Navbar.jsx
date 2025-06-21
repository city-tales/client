import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar">
      {/* Brand/Logo (optional) */}
      <div className="navbar-left">
        
      </div>

      {/* Nav links in the center or left */}
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Stories</a></li>
        <li><a href="#">Trending</a></li>
        <li><Link to="/write-story" className="nav-highlight">Write a Story</Link></li>
        <li><a href="#">Categories</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">About</a></li>
        
      </ul>

      {/* Search box with gradient background */}
      <div className="search-box">
  {/* Left portion: white input */}
  <input 
    type="text" 
    placeholder="Search a Story"
    className="search-input" 
  />
  
  {/* Right portion: gradient background with icon */}
  <div className="search-icon-container">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="search-icon"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 19l-3-3m-2.5-5.5a5.5 
           5.5 0 1 1-11 0 
           5.5 5.5 0 0 1 11 0z"
      />
    </svg>
  </div>
</div>

    </nav>
  );
}

export default Navbar;
