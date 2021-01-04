import React, { useEffect, useContext } from "react";
import "./Portraits.scss";
import { portraits } from "./portraits";
import Image from "../../components/Image";
import { PageContext } from "../../context/pageContext";

const Portraits = (props) => {
  const {
    collection,
    imageIndex,
    choosePortrait,
    deactivateHome,
    chooseImgIdx,
  } = useContext(PageContext);

  useEffect(() => {
    deactivateHome();
  }, [deactivateHome]);

  const renderImage = (id) => {
    choosePortrait();
    chooseImgIdx(id);
    props.history.push(`/faces/${id}`);
  };

  return (
    <div className="portraits">
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

export default Portraits;
