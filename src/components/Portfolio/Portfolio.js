import React from "react";
import "./Portfolio.css";
import groceryShop from "../../images/grocery-shop.png";
import eRiders from "../../images/urban-riders.png";
import premierLeague from "../../images/english-premier-league2.png";
const Portfolio = () => {
  return (
    <div className="project-container pt-4">
      <h1 className="text-center">Projects</h1>
      <div className="row mt-5 mx-5 project-div">
        <div className="col-md-4">
          <div>
            <img src={groceryShop} alt="" />
          </div>
          <h6>Fast ‘N Fresh Grocery Store </h6>
          <p>A full-stack project made with MERN stack development</p>
          <p>
            Tools – React JS, Express JS, MongoDB, Node JS, React Bootstrap,
            Bootstrap, Firebase, Heroku, HTML, CSS
          </p>
        </div>

        <div className="col-md-4">
          <div>
            <img src={eRiders} alt="" />
          </div>
          <h6>Fast ‘N Fresh Grocery Store </h6>
          <p>A full-stack project made with MERN stack development</p>
          <p>
            Tools – React JS, Express JS, MongoDB, Node JS, React Bootstrap,
            Bootstrap, Firebase, Heroku, HTML, CSS
          </p>
        </div>
        <div className="col-md-4">
          <div>
            <img src={premierLeague} alt="" />
          </div>
          <h6>Fast ‘N Fresh Grocery Store </h6>
          <p>A full-stack project made with MERN stack development</p>
          <p>
            Tools – React JS, Express JS, MongoDB, Node JS, React Bootstrap,
            Bootstrap, Firebase, Heroku, HTML, CSS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
