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
        <NavLink to="my-profile/" title="Logo">
          <img src="../src/assets/r-logo.png" alt="Logo" />
        </NavLink>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        {!menuIcon ? <BiMenu /> : <IoClose />}
      </div>
      <nav className={menuIcon ? "nav-active" : "nav"}>
        <NavLink to="my-profile/" onClick={handleClick}>
          Home
        </NavLink>
        <NavLink to="my-profile/about" onClick={handleClick}>
          About
        </NavLink>
        <NavLink to="my-profile/projects" onClick={handleClick}>
          Projects
        </NavLink>
        <NavLink to="my-profile/contact" onClick={handleClick}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};
