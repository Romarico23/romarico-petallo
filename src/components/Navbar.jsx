import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import "./navbar.css";

export const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  const handleClick = () => {
    setMenuIcon(!menuIcon);
  };

  return (
    <header>
      <div className="header-logo">
        <NavLink to="/" title="Logo">
          <img src="../src/assets/r-logo.png" alt="Logo" />
        </NavLink>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        {!menuIcon ? <BiMenu /> : <IoClose />}
      </div>
      <nav className={menuIcon ? "nav-active" : "nav"}>
        <NavLink to="/" onClick={handleClick}>
          Home
        </NavLink>
        <NavLink to="/about" onClick={handleClick}>
          About
        </NavLink>
        <NavLink to="/projects" onClick={handleClick}>
          Projects
        </NavLink>
        <NavLink to="/contact" onClick={handleClick}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};
