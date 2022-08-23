import React from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <Link to="/">
        <img src="src/Images/logo.svg" alt="" />
      </Link>
      <nav className="model_nav">
        <Link to="/models">Model S</Link>
        <Link to="/model3">Model 3</Link>
        <Link to="/modelx">Model X</Link>
        <Link to="/modely">Model Y</Link>
        <Link to="/solarroof">Solar Roof</Link>
        <Link to="/solarpanels">Solar Panels</Link>
      </nav>
      <button className="menu">Menu</button>
    </header>
  );
}

export default Navbar;
