import React from "react";
import "./Image.scss";

const Image = (props) => {
  return <img className="image" src={props.image} alt={props.alt}></img>;
};

export default Image;
