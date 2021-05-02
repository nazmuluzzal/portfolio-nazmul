import React from "react";
import "./App.css";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="main-container">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
      <Blog></Blog>
      <Contact></Contact>
    </div>
  );
}

export default App;
