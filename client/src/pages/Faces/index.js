import React, { useEffect, useContext } from "react";
import "./Faces.scss";
import { portraits } from "./portraits";
import Image from "../../components/Image";
import { PageContext } from "../../context/pageContext";

const Faces = (props) => {
  const { chooseFaces, deactivateHome, chooseImgIdx } = useContext(PageContext);

  useEffect(() => {
    deactivateHome();
  }, [deactivateHome]);

  const renderImage = (id) => {
    chooseFaces();
    chooseImgIdx(id);
    props.history.push(`/faces/${id}`);
  };

  return (
    <div className="faces">
      {portraits.map((portrait) => (
        <div onClick={() => renderImage(portrait.id)}>
          <Image
            key={portrait.id}
            image={portrait.image}
            alt={portrait.alt}
            id={portrait.id}
          />
        </div>
      ))}
    </div>
  );
};

export default Faces;
