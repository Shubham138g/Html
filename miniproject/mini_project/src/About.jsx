import React from "react";
import img1 from "../src/image/img1.svg";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import about2 from "../src/image/about2.svg";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to the about page"
        imgsrc={about2}
        visit="/contact"
        btname="Contact Us"
      />
    </>
  );
};

export default About;
