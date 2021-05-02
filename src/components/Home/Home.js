import React from "react";
import "./Home.css";
import Typical from "react-typical";
const Home = () => {
  return (
    <div className="home-container text-center">
      <h1>Hi, I'm Nazmul</h1>
      <h3>
        I'm a
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[" Web Developer", 3000, " Designer", 3000]}
        />
      </h3>
    </div>
  );
};

export default Home;
