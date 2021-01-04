import React, { useEffect, useContext } from "react";
import "./Faces.scss";
import MasonLayout from "../../components/MasonLayout";
import { PageContext } from "../../context/pageContext";

const Faces = (props) => {
  const {
    chooseCollection,
    deactivateHome,
    chooseImgIdx,
    changeRootPath,
    rootPath,
  } = useContext(PageContext);

  useEffect(() => {
    deactivateHome();
    chooseCollection("faces");
    changeRootPath("/faces");
  }, [deactivateHome, chooseCollection, changeRootPath]);

  const renderImage = (id) => {
    chooseImgIdx(id);
    props.history.push(`${rootPath}/${id}`);
  };

  return <MasonLayout renderImage={renderImage} />;
};

export default Faces;
