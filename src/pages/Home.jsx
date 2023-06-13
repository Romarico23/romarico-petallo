import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion as m } from "framer-motion";
import "./home.css";

export const Home = () => {
  const [typingText] = useTypewriter({
    words: ["Web Developer", "Musician", "Designer"],
    typeSpeed: 100,
    deleteSpeed: 100,
    delaySpeed: 1000,
    loop: {},
  });

  return (
    <m.section
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Romarico Petallo</h1>
        <h3>
          And I'm a <span>{typingText}</span>
          <span>
            <Cursor />
          </span>
        </h3>
        <p>
          This is my official portfolio website to show all my projects and work
          experience in web development.
        </p>
        <div className="social-media">
          <NavLink to="https://www.facebook.com/rico.petallo" title="Facebook">
            <FaFacebook />
          </NavLink>
          <NavLink to="https://github.com/Romarico23" title="Github">
            <FaGithub />
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/in/romarico-petallo-b537271a2/"
            title="Linkedin"
          >
            <FaLinkedin />
          </NavLink>
        </div>
        <div className="download-cv">
          <a
            href="https://docs.google.com/document/d/1GlxNE53Nh39FUJJAXTWy8S80mljbnnVFbZ1k8JSmAXI/edit"
            target="_blank"
          >
            <button>Download CV</button>
          </a>
        </div>
      </div>
    </m.section>
  );
};
