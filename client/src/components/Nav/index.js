import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PageContext } from "../../context/pageContext";
import "./Nav.scss";

const Nav = () => {
  const { atHome, activateHome, deactivateHome } = useContext(PageContext);

  return (
    <div
      className="nav"
      style={{
        position: atHome ? "absolute" : "relative",
      }}
    >
      <div className="nav-pages-div">
        <Link to="/" className="nav-page" onClick={activateHome}>
          Home
        </Link>

        <Link to="/faces" className="nav-page" onClick={deactivateHome}>
          Faces
        </Link>
        <Link to="/places" className="nav-page" onClick={deactivateHome}>
          Places
        </Link>
        <Link to="/events" className="nav-page" onClick={deactivateHome}>
          Events
        </Link>
        <Link to="/street" className="nav-page" onClick={deactivateHome}>
          Street
        </Link>
      </div>
    </div>
  );
};

export default Nav;
