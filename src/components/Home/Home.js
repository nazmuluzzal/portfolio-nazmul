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
    </div>
  );
};

export default Home;
