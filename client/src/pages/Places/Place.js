import React, { useEffect, useContext } from "react";
import "./Places.scss";
import MasonLayout from "../../components/MasonLayout";
import DRLayout from "../Places/DRLayout";
import { PageContext } from "../../context/pageContext";
import { useParams } from "react-router-dom";

const Place = (props) => {
  const { deactivateHome, chooseImgIdx } = useContext(PageContext);
  const { place } = useParams();

  const renderImage = (id) => {
    chooseImgIdx(id);
    props.history.push(`/places/${place}/${id}`);
  };

  useEffect(() => {
    deactivateHome();
  }, [deactivateHome]);

  if (place === "dominican-republic") {
    return <DRLayout renderImage={renderImage} />;
  }

  return <MasonLayout renderImage={renderImage} />;
};

export default Place;
