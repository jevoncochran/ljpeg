import React, { useEffect, useContext } from "react";
import "./Collection.scss";
import MasonLayout from "../MasonLayout";
import DRLayout from "../../pages/Places/DRLayout";
import { PageContext } from "../../context/pageContext";
import { useParams } from "react-router-dom";

const Collection = (props) => {
  const { deactivateHome, chooseImgIdx, rootPath } = useContext(PageContext);
  const { directory } = useParams();

  const renderImage = (id) => {
    chooseImgIdx(id);
    // might need a slash right before the rootPath variable
    // test out and see
    props.history.push(`${rootPath}/${directory}/${id}`);
  };

  useEffect(() => {
    deactivateHome();
  }, [deactivateHome]);

  if (directory === "dominican-republic") {
    return <DRLayout renderImage={renderImage} />;
  }

  return <MasonLayout renderImage={renderImage} />;
};

export default Collection;
