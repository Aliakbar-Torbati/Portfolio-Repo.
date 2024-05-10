import React from "react";
import "./NavbarStyle.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <Link to={"/"}>Portfolio</Link>
    <ul className="nav-menue">
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/projects">Projects</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
    </ul>
    </div>
  );
};

export default Navbar;
