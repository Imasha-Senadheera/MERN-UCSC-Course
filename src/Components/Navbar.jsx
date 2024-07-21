import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link">
            <h1>Logo</h1>
          </a>
        </li>
        <li className="nav-item">
          <a href="/home" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/about-us" className="nav-link">
            About Us
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a href="/view-more" className="nav-link">
            <button className="view-more-btn">View More</button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
