import React from "react";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence initial={false} mode={"wait"}>
      <Routes location={location} key={location.pathname}>
        <Route path="romarico-petallo/" element={<Home />} />
        <Route path="romarico-petallo/about" element={<About />} />
        <Route path="romarico-petallo/projects" element={<Projects />} />
        <Route path="romarico-petallo/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}
export default AnimatedRoutes;
