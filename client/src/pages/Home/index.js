import React, { useEffect, useContext } from "react";
import "./Home.scss";
// import Intro from "./Intro";
import { PageContext } from "../../context/pageContext";
// import ljpegPlaceHolder from "../../assets/images/home/ljpeg_placeholder.jpg";
import ComingSoon from "../../components/ComingSoon";

const Home = () => {
  const { activateHome } = useContext(PageContext);

  useEffect(() => {
    activateHome();
  }, [activateHome]);

  return (
    <div className="home">
      {/* <div
        className="home-img"
        style={{ backgroundImage: `url(${ljpegPlaceHolder})` }}
      ></div> */}
      <ComingSoon />
    </div>
  );
};

export default Home;
