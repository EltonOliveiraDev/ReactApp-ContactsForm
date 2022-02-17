import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact/Index";
import Home from "../pages/Home/Index";

const Path = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
export default Path;
