import React from "react";
import { image } from "../data/data";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>To know more about the best web development companies in NYC, go to: 
        <a href="https://themanifest.com/web-development/companies/new-york"> the Manifest website.</a>
      </p>
      <img src={image} alt="I made this"/>
  </div>);
}

export default About;
