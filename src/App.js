import React from "react";
import "./App.css";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Particles from "react-particles-js";

function App() {
  return (
    <div className="main-container">
      <Particles
        // params={{
        //   particles: {
        //     number: {
        //       value: 160,
        //       density: {
        //         enable: false,
        //       },
        //     },
        //     size: {
        //       value: 10,
        //       random: true,
        //     },
        //     move: {
        //       direction: "bottom",
        //       out_mode: "out",
        //     },
        //     line_linked: {
        //       enable: false,
        //     },
        //   },
        //   interactivity: {
        //     events: {
        //       onclick: {
        //         enable: true,
        //         mode: "remove",
        //       },
        //     },
        //     modes: {
        //       remove: {
        //         particles_nb: 10,
        //       },
        //     },
        //   },
        // }}

        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
        height="82vh"
        style={{ position: "absolute", zIndex: "-9999" }}
      />
      <div
        style={{ position: "relative", zIndex: "9999", overflowX: "hidden" }}
      >
        <Navbar></Navbar>
        <Home></Home>
        <About></About>
        <Portfolio></Portfolio>
        <Blog></Blog>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
