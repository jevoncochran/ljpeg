import React, { useEffect, useContext } from "react";
import "./Portraits.scss";
import { portraits } from "./portraits";
import Image from "./Image";
import { PageContext } from "../../context/pageContext";
import Grid from "@material-ui/core/Grid";

const Portraits = () => {
  const { deactivateHome } = useContext(PageContext);

  useEffect(() => {
    deactivateHome();
  }, []);

  return (
    <div className="portraits">
      {portraits.map((portrait) => (
        // <Grid
        //   item
        //   xs={4}
        //   style={{ width: "32.5%", height: "auto", border: "1px dashed black" }}
        // >
        <Image image={portrait.image} alt={portrait.alt} />
        // </Grid>
      ))}
    </div>
  );
};

export default Portraits;
