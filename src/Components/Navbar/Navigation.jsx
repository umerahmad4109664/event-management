import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
      <h3 className="logo">Event Management</h3>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li> 
        </Link>
        <Link to="/EventCreate">
          <li>Create Event</li>
        </Link>
        <Link to="/EventListing">
          <li>List Event</li>
        </Link>
      </ul>
      <div className="buttons">
      <Link to="/Create-an-Account">
        <button className="nav-btn register">Register</button>
        </Link>
        <button className="nav-btn sign-in">Sign In</button>
        
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
