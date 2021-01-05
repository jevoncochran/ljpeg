import React from "react";
import "./Places.scss";
import Grid from "@material-ui/core/Grid";
import { dr } from "./dr";

const DRLayout = (props) => {
  const topPics = dr.slice(0, dr.length - 1);
  return (
    <div className="dr-layout">
      <Grid container spacing={0}>
        {topPics.map((img) => (
          <Grid
            className="dr-layout-img-div"
            key={img.id}
            item
            xs={6}
            onClick={() => props.renderImage(img.id)}
          >
            <img className="dr-layout-img" src={img.image} alt={img.alt} />
          </Grid>
        ))}
      </Grid>
      <img
        className="dr-layout-last-img"
        src={dr[dr.length - 1].image}
        alt={dr[dr.length - 1].alt}
        onClick={() => props.renderImage(dr[dr.length - 1].id)}
      />
    </div>
  );
};

export default DRLayout;
