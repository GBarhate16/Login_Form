import React from "react";
import { Link } from "react-router-dom";

import './style.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">My Website</div>
      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/login" className="nav-link">Login/SignUp</Link></li>
        {/* <li><Link to="/signup" className="nav-link">Signup</Link></li> */}
        <li><Link to="/feedback" className="nav-link">Feedback</Link></li>
        <li><Link to="/interview" className="nav-link">Interview</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;