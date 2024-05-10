import React, { useState } from "react";
import "./NavbarStyle.scss";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [clickNav, setClickNav] = useState(false);

  const handleNavbar = () => {
    setClickNav(!clickNav);
  };

  return (
    <div className="header">
      <Link to={"/"}>Portfolio</Link>
      <ul className={clickNav ? "nav-menue active" : "nav-menue"}>
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
      <div className="hamburgerIcon">
        {!clickNav ? (
          <FaBars onClick={handleNavbar} size={20} style={{ color: "#fff" }} />
        ) : (
          <FaTimes onClick={handleNavbar} size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
