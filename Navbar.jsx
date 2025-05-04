import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Link } from 'react-router-dom';
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white px-4 shadow-sm fixed-top">
        <a className="navbar-brand" href="#">
          Om Barve
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" Link to='/Project'>Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills" Link to='/ Skill'>Skill</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#resume" Link to='/Resume'>Resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Contact" >Contact</a>
            </li>
            <li className="nav-item">
              <button className="icon-button" onClick={toggleTheme} title="Toggle Theme">
                <i className={`bi ${darkMode ? "bi-moon" : "bi-brightness-high"}`}></i>
              </button>
            </li>
          </ul>
        </div>
      </nav>

    

    
    </>
  );
};

export default Navbar;
