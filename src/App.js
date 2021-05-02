import React from "react";
import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
    </div>
  );
}

export default App;
