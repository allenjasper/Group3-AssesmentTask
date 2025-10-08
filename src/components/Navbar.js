import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
      <div className="container">
        {/* Brand Logo + Name */}
        <a className="navbar-brand fw-bold d-flex align-items-center" href="#home">
          <img 
            src="/pnc-logo.png"   // replace with your actual logo path
            alt="PnC Logo" 
            width="40" 
            height="40" 
            className="me-2"
          />
          PAMANTASAN NG CABUYAO
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#courses">Courses</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#admission">Admission</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
