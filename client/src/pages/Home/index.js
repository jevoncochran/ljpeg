import React, { useEffect, useContext } from "react";
import "./Home.scss";
import ljp from "../../assets/images/home/ljpeg-home-background.jpg";
import Intro from "./Intro";
import { PageContext } from "../../context/pageContext";

const Home = () => {
  const { activateHome } = useContext(PageContext);

  useEffect(() => {
    activateHome();
  }, []);

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
