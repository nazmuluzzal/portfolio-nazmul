import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light px-4 pt-3">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            Portfolio
          </a>
          <button
            className="navbar-toggler btn-info"
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
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" href="#">
                  About
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active text-white" href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active  text-white" href="#">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://drive.google.com/uc?export=download&id=1sLUPYUPo0xbg-Q_2tXcjk4vq8scM4SqC"
                >
                  <button className="btn btn-primary">Resume</button>
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
