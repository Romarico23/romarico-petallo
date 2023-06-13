import React from "react";
import "./about.css";
import { motion as m } from "framer-motion";

export const About = () => {
  return (
    <m.section
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <div className="about-content">
        <h1>
          About <span>Me</span>
        </h1>
        <h3>Web Developer!</h3>
        <p>
          Hi! My name is Romarico and I enjoy creating things that live on the
          internet. My interest in web development started back in 2022 when I
          decided to try learning about building website using notepad it taught
          me a lot about HTML & CSS.
        </p>
        <p>
          Currently, I am working as a freelance web developer and online
          marketer using facebook marketplace.
        </p>
        <p>
          Here are the technologies/languages I've been working with recently:
        </p>
        <ul>
          <li>React</li>
          <li>Node JS</li>
          <li>JavaScript</li>
          <li>CSS</li>
          <li>HTML</li>
        </ul>
      </div>
    </m.section>
  );
};
