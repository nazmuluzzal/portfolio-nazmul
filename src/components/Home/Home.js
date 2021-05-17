import React from "react";
import "./Home.css";
import Typical from "react-typical";
const Home = () => {
  return (
    <div
      id="home"
      className="home-container text-center"
      style={{ overflowX: "hidden" }}
    >
      <h1>
        Hi, I'm <span className="span-txt"> Nazmul</span>
      </h1>
      <h5>
        I'm a
        <span className="span-txt">
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[" Web Developer", 3000, " Designer", 3000]}
          />
        </span>
      </h5>
      <div className="d-flex justify-content-center mt-5">
        <a href="/#portfolio" className="nav-link">
          <button className="btn portfolio-btn">My Portfolio</button>
        </a>
        <a
          className="nav-link"
          href="https://drive.google.com/uc?export=download&id=1sLUPYUPo0xbg-Q_2tXcjk4vq8scM4SqC"
        >
          <button className="btn resume-btn">Download Resume</button>
        </a>
      </div>
    </div>
  );
};

export default Home;
