import React, { useState, useContext, useEffect } from "react";
import "./MasonLayout.scss";
import Image from "../../components/Image";
import { PageContext } from "../../context/pageContext";
import { portraits } from "../../pages/Faces/portraits";
import { colombia } from "../../pages/Places/colombia";

const MasonLayout = (props) => {
  const { collection } = useContext(PageContext);
  const [imageArray, setImageArray] = useState("");

  useEffect(() => {
    switch (collection) {
      case "faces":
        setImageArray(portraits);
        break;
      case "Colombia":
        setImageArray(colombia);
      default:
        break;
    }
  }, [collection]);

  return (
    <div className="ml">
      {imageArray !== "" &&
        imageArray.map((item) => (
          <div onClick={() => props.renderImage(item.id)}>
            <Image
              key={item.id}
              image={item.image}
              alt={item.alt}
              id={item.id}
            />
          </div>
        ))}
    </div>
  );
};

export default MasonLayout;
