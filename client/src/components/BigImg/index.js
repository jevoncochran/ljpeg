import React, { useState, useContext, useEffect } from "react";
import { PageContext } from "../../context/pageContext";
import { portraits } from "../../pages/Faces/portraits";
import { chicago } from "../../pages/Places/chicago";
import { colombia } from "../../pages/Places/colombia";
import { brazil } from "../../pages/Places/brazil";
import { dr } from "../../pages/Places/dr";
import { partyNoire } from "../../pages/Events/partyNoire";
import { tdeXmas2018 } from "../../pages/Events/tdeXmas2018";
import "./BigImg.scss";
import { futureHood } from "../../pages/Events/futureHood";

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

  // may need to change this because the directory property better reflects the dynamic variable here
  const showThumbnails = () => {
    if (rootPath === "/places" || rootPath === "/events") {
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
      case "Chicago":
        setImageArray(chicago);
        break;
      case "Colombia":
        setImageArray(colombia);
        break;
      case "Brazil":
        setImageArray(brazil);
        break;
      case "Dominican-Republic":
        setImageArray(dr);
        break;
      case "Party-Noire":
        setImageArray(partyNoire);
        break;
      case "TDE-Xmas":
        setImageArray(tdeXmas2018);
        break;
      case "Future-Hood":
        setImageArray(futureHood);
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
