import React from "react";
import "./About.css";
import uzzalImg from "../../images/uzzal-dp-1.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="about-container pt-4 pb-5 mb-5"
      style={{ overflowX: "hidden" }}
    >
      <h1 className="text-center">
        <span className="span-txt">About Me</span>
      </h1>
      <div className="row mt-5">
        <div className="col-md-5">
          <img className="img-fluid profle-img" src={uzzalImg} alt="" />
        </div>
        <div className="col-md-7 details-col">
          <h3>
            Know in <span className="span-txt">Details</span>
          </h3>
          <h6>
            Hello, I'm Md. Nazmul Hasan. I always love to do coding and always
            motivated to learn new technologies in web development. I have good
            skills in JavaScript, React Js, HTML, CSS, Bootstap and i'm also
            comfortable with Node Js, Express Js and MongoDB.
          </h6>
          <h3>
            Technical <span className="span-txt">Skills</span>
          </h3>
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
