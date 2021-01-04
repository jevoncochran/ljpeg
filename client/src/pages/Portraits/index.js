import React, { useEffect, useContext } from "react";
import "./Portraits.scss";
import { portraits } from "./portraits";
import Image from "./Image";
import { PageContext } from "../../context/pageContext";

const Portraits = () => {
  const { deactivateHome } = useContext(PageContext);

  useEffect(() => {
    deactivateHome();
  }, [deactivateHome]);

  return (
    <div className="portraits">
      {portraits.map((portrait) => (
        <Image image={portrait.image} alt={portrait.alt} />
      ))}
    </div>
  );
};

export default Portraits;
