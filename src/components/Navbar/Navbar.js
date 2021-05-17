import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light px-5 pt-3">
        <div className="container-fluid">
          <a className="navbar-brand nav-txt-color" href="/#home">
            Portfolio
          </a>
          <button
            className="navbar-toggler nav-txt-color toggle-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto nav-hover">
              <li className="nav-item ">
                <a
                  className="nav-link active nav-txt-color"
                  aria-current="page"
                  href="/#home"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active nav-txt-color" href="/#about">
                  About
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active nav-txt-color" href="/#portfolio">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active nav-txt-color" href="/#blog">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active  nav-txt-color" href="/#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
