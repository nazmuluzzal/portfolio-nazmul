import React from "react";
import "./Portfolio.css";
import groceryShop from "../../images/grocery-shop.png";
import eRiders from "../../images/urban-riders.png";
import premierLeague from "../../images/english-premier-league.png";
import Project from "./Project";
const Portfolio = () => {
  const projectsData = [
    {
      id: "proj1",
      name: "Fast ‘N Fresh Grocery Store",
      img: groceryShop,
      details: "A full-stack project made with MERN stack development",
      live: "https://grocery-shop-auth.web.app/",
      code: "https://github.com/nazmuluzzal/fast-n-fresh-grocery-shop-client",
    },
    {
      id: "proj2",
      name: "eRider Service Bangladesh ",
      img: eRiders,
      details: "A ride-sharing project with firebase authentication",
      live: "https://react-urban-riders-authen.web.app/",
      code: "https://github.com/nazmuluzzal/erider-service-firebase-auth",
    },
    {
      id: "proj3",
      name: "English Premier League ",
      img: premierLeague,
      details: "A routing project that has dynamic routing for a single team",
      live: "https://react-english-premier-league.netlify.app/",
      code: "https://github.com/nazmuluzzal/react-english-premier-league",
    },
  ];

  return (
    <div className="pt-4">
      <h1 className="text-center">Projects</h1>
      <div className="project-container mt-5 mx-5">
        {projectsData.map((project) => (
          <Project project={project}></Project>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
