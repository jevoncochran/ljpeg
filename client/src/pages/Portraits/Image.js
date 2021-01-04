import React from "react";
import "./Portraits.scss";

const Image = (props) => {
  return (
    <img className="portraits-image" src={props.image} alt={props.alt}></img>
  );
};

export default Image;
