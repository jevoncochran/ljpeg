import React, { useState, useContext, useEffect } from "react";
import { PageContext } from "../../context/pageContext";
import { portraits } from "../../pages/Faces/portraits";
import { colombia } from "../../pages/Places/colombia";
import "./BigImg.scss";

const BigImg = (props) => {
  const { collection, imageIndex, rootPath } = useContext(PageContext);
  const [imageArray, setImageArray] = useState("");
  const [actualIndex, setActualIndex] = useState(imageIndex);

  const getNextPic = () => {
    if (actualIndex === imageArray.length - 1) {
      setActualIndex(0);
    } else {
      setActualIndex(actualIndex + 1);
    }
  };

  const getPrevPic = () => {
    if (actualIndex === 0) {
      setActualIndex(imageArray.length - 1);
    } else {
      setActualIndex(actualIndex - 1);
    }
  };

  const showThumbnails = () => {
    if (rootPath === "/places") {
      props.history.push(`${rootPath}/${collection.toLowerCase()}`);
    } else {
      props.history.push(`/${collection.toLowerCase()}`);
    }
  };

  useEffect(() => {
    switch (collection) {
      case "faces":
        setImageArray(portraits);
        break;
      case "Colombia":
        setImageArray(colombia);
        break;
      default:
        break;
    }
  }, [collection]);

  return (
    <div className="big-img">
      <div className="big-img-direction-div">
        <p className="big-img-button-text" onClick={getPrevPic}>
          Prev
        </p>
        <p className="big-img-button-text">/</p>
        <p className="big-img-button-text" onClick={getNextPic}>
          Next
        </p>
      </div>
      <div className="big-img-thumbnail-div">
        <p className="big-img-button-text" onClick={showThumbnails}>
          Show Thumbnails
        </p>
      </div>
      <div className="big-img-img-container">
        {imageArray !== "" && (
          <img
            className="big-img-img"
            src={imageArray[actualIndex].image}
            alt={imageArray[actualIndex].alt}
          />
        )}
      </div>
    </div>
  );
};

export default BigImg;
