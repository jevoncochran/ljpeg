import React, { useState, useContext, useEffect } from "react";
import "./MasonLayout.scss";
import Image from "../../components/Image";
import { PageContext } from "../../context/pageContext";
import { portraits } from "../../pages/Faces/portraits";
import { colombia } from "../../pages/Places/colombia";
import { brazil } from "../../pages/Places/brazil";
import { partyNoire } from "../../pages/Events/partyNoire";
import { tdeXmas2018 } from "../../pages/Events/tdeXmas2018";
import { futureHood } from "../../pages/Events/futureHood";

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
        break;
      case "Brazil":
        setImageArray(brazil);
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
