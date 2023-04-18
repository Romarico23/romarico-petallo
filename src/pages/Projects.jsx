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
      transition={{ duration: 0.5, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <div className="projects-content">
        <h1>
          Latest <span>Project</span>
        </h1>
        <div className="projects-container">
          <div className="projects-box">
            <img
              src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Project-1"
            />
            <div className="projects-layer">
              <h4>Web Title</h4>
              <NavLink to="/">
                <BiLinkExternal />
              </NavLink>
            </div>
          </div>
          <div className="projects-box">
            <img
              src="https://images.unsplash.com/photo-1593640495253-23196b27a87f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Project-2"
            />
            <div className="projects-layer">
              <h4>Web Title</h4>
              <NavLink to="/">
                <BiLinkExternal />
              </NavLink>
            </div>
          </div>
          <div className="projects-box">
            <img
              src="https://images.unsplash.com/photo-1517518295033-d5ab8ca078cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRlc2t0b3AlMjBjb21wdXRlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="Project-3"
            />
            <div className="projects-layer">
              <h4>Web Title</h4>
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
