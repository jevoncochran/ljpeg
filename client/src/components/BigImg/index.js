import React, { useState, useContext, useEffect } from "react";
import { PageContext } from "../../context/pageContext";
import { portraits } from "../../pages/Portraits/portraits";
import "./BigImg.scss";

const BigImg = (props) => {
  const { collection, imageIndex } = useContext(PageContext);
  const [array, setArray] = useState("");
  const [actualIndex, setActualIndex] = useState(imageIndex);
  const [address, setAddress] = useState("");

  const getNextPic = () => {
    if (actualIndex === array.length - 1) {
      setActualIndex(0);
    } else {
      setActualIndex(actualIndex + 1);
    }
  };

  const getPrevPic = () => {
    if (actualIndex === 0) {
      setActualIndex(array.length - 1);
    } else {
      setActualIndex(actualIndex - 1);
    }
  };

  useEffect(() => {
    switch (collection) {
      case "portraits":
        setArray(portraits);
        setAddress("faces");
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
        <p
          className="big-img-button-text"
          onClick={() => props.history.push(`/${address}`)}
        >
          Show Thumbnails
        </p>
      </div>
      <div className="big-img-img-container">
        {array !== "" && (
          <img
            className="big-img-img"
            src={array[actualIndex].image}
            alt={array[actualIndex].alt}
          />
        )}
      </div>
    </div>
  );
};

export default BigImg;
