import React from "react";
import { Link } from "react-router-dom";
import './style.css';

const Home = () => (
  <div className="all-content">
    <div className="content">
      <Link className="about" to="/about">About </Link>
      <Link className="contact" to="/contact">Contact</Link>
    </div>
    <h1>Bem vindo ao Ideia no Ar!</h1>
  </div>
);

export default Home;
