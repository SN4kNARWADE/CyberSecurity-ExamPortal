import React from "react";
import { NavLink } from 'react-router-dom';


// This is Navbar Component

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-white" to="/">Cyber Warrior</NavLink>
          <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active text-white" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/aboutus">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/contactus">Contact</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/signup">Register</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/login">Login</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
