import React, { useEffect, useContext } from "react";
import "./Home.scss";
import Intro from "./Intro";
import { PageContext } from "../../context/pageContext";
import tasha from "../../assets/images/home/tasha.jpg";

const Home = () => {
  const { activateHome } = useContext(PageContext);

  useEffect(() => {
    activateHome();
  }, [activateHome]);

  return (
    <div className="home">
      <div
        className="home-img"
        style={{ backgroundImage: `url(${tasha})` }}
      ></div>
      <Intro />
    </div>
  );
};

export default Home;
