import React from "react";
import "./About.css";
import uzzalImg from "../../images/uzzal-dp-1.jpg";

const About = () => {
  return (
    <div className="about-container pt-4 pb-5 mb-5">
      <h1 className="text-center">About Me</h1>
      <div className="row mt-5">
        <div className="col-md-5">
          <img className="img-fluid profle-img" src={uzzalImg} alt="" />
        </div>
        <div className="col-md-7 details-col">
          <h3>Know in Details</h3>
          <h6>
            Hello, I'm Md. Nazmul Hasan. I always love to do coding and always
            motivated to learn new technologies in web development. I have good
            skills in JavaScript, React Js, HTML, CSS, Bootstap and i'm also
            comfortable with Node Js, Express Js and MongoDB.
          </h6>
          <h3>My Technical Skills </h3>
          <h6>
            {" "}
            <p>● Programming languages: JavaScript, HTML, CSS</p>
            <p>
              ● Library & Frameworks: React JS, Node JS, Express JS, Bootstrap,
              Material UI
            </p>
            <p>● Database: MongoDB</p>
            <p>● IDE & CLI: VS Code, Git</p>
            <p>● Cloud Platform: Netlify, Firebase, Heroku</p>
            <p>● Operating system: Windows 10, Ubuntu 18.04LTS</p>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default About;
