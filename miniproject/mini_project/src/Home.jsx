import React from "react";
import img1 from "../src/image/img1.svg";
import { NavLink } from "react-router-dom";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name=" Grow your business with"
        imgsrc={img1}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
