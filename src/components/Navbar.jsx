import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import "./navbar.css";

export const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  const handleClick = () => {
    setMenuIcon(!menuIcon);
  };
  const [show, setShow] = useState(true);
  const controlNavbar = () => {
    if (window.scrollY > 200) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);
  return (
    <header className={`header ${show && "header_blue"}`}>
      <div className="header-logo">
        <NavLink to="/" title="Logo">
          <img src="https://i.ibb.co/ThY3wrm/logos.png" alt="Logo" />
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
