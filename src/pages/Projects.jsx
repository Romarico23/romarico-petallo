import React from "react";
import { motion as m } from "framer-motion";
import { BiLinkExternal } from "react-icons/bi";
import "./projects.css";
import { NavLink } from "react-router-dom";

export const Projects = () => {
  return (
    <m.section
      className="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <div className="projects-content">
        <h1>
          Latest <span>Project</span>
        </h1>
        <div className="projects-container">
          <div className="projects-box">
            <img
              src="https://i.ibb.co/QM62pyF/gjserviceswebphoto.png"
              alt="Project-1"
            />
            <div className="projects-layer">
              <h4>GJ Services</h4>
              <NavLink
                to="https://romarico23.github.io/gjservices-/#/"
                target="_blank"
              >
                <BiLinkExternal />
              </NavLink>
            </div>
          </div>
          <div className="projects-box">
            <img src="https://i.ibb.co/NFxSdjg/eshopee.png" alt="Project-2" />
            <div className="projects-layer">
              <h4>Shopping Cart</h4>
              <NavLink
                to="https://romarico23.github.io/eshopee/"
                target="_blank"
              >
                <BiLinkExternal />
              </NavLink>
            </div>
          </div>
          <div className="projects-box">
            <img
              src="https://www.lansingstatejournal.com/gcdn/presto/2021/01/07/PLSJ/3c94e117-1984-43b1-bb48-dcfa7b388fa4-Coming_Soon_WEB.jpg?crop=2047,1152,x0,y103&width=2047&height=1152&format=pjpg&auto=webp"
              alt="Project-3"
            />
            <div className="projects-layer">
              <h4>Coming Soon...</h4>
              <NavLink to="/">
                <BiLinkExternal />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </m.section>
  );
};
