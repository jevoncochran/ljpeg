import React, { useContext, useEffect } from "react";
import "./Places.scss";
import { places } from "./places";
import Grid from "@material-ui/core/Grid";
import { PageContext } from "../../context/pageContext";

const Places = (props) => {
  const {
    deactivateHome,
    chooseCollection,
    changeRootPath,
    rootPath,
  } = useContext(PageContext);

  const renderCollection = (place, collection) => {
    chooseCollection(collection);
    props.history.push(`${rootPath}/${place}`);
  };

  useEffect(() => {
    deactivateHome();
    changeRootPath("/places");
  }, [deactivateHome, changeRootPath]);

  return (
    <Grid className="places" container spacing={2}>
      {places.map((place) => (
        <Grid
          key={place.place}
          className="places-img-div"
          item
          xs={4}
          onClick={() => renderCollection(place.directory, place.collection)}
        >
          <div
            className="places-img"
            style={{
              backgroundImage: `url(${place.image})`,
              backgroundPosition: `${place.bg_position}`,
            }}
          ></div>
          <p className="places-name">{place.place}</p>
        </Grid>
      ))}
    </Grid>
  );
};

export default Places;
