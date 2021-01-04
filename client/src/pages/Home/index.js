import React from "react";
import "./Home.scss";
import ljp from "../../assets/images/home/ljp.JPG";
import Intro from "./Intro";

const Home = () => {
  return (
    <div className="home">
      <div
        className="home-img"
        style={{ backgroundImage: `url(${ljp})` }}
      ></div>
      <Intro />
    </div>
  );
};

export default Home;
