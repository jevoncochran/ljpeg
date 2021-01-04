import React, { useContext, useEffect } from "react";
import "./Places.scss";
import { places } from "./places";
import Grid from "@material-ui/core/Grid";
import { PageContext } from "../../context/pageContext";

const Places = () => {
  const { deactivateHome } = useContext(PageContext);

  useEffect(() => {
    deactivateHome();
  }, [deactivateHome]);

  return (
    <Grid className="places" container spacing={2}>
      {places.map((place) => (
        <Grid key={place.place} className="places-img-div" item xs={4}>
          <div
            className="places-img"
            style={{ backgroundImage: `url(${place.image})` }}
          ></div>
          <p className="places-name">{place.place}</p>
        </Grid>
      ))}
    </Grid>
  );
};

export default Places;
