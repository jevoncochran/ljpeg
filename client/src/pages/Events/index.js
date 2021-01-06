import React, { useContext, useEffect } from "react";
import { PageContext } from "../../context/pageContext";
import "./Events.scss";
import { events } from "./events";
import Grid from "@material-ui/core/Grid";

const Events = (props) => {
  const {
    deactivateHome,
    chooseCollection,
    changeRootPath,
    rootPath,
  } = useContext(PageContext);

  const renderCollection = (event, collection) => {
    chooseCollection(collection);
    props.history.push(`${rootPath}/${event}`);
  };

  useEffect(() => {
    deactivateHome();
    changeRootPath("/events");
  }, [deactivateHome, changeRootPath]);

  return (
    <Grid className="events" container spacing={2}>
      {events.map((evnt) => (
        <Grid
          key={evnt.event}
          className="events-img-div"
          item
          xs={4}
          onClick={() => renderCollection(evnt.directory, evnt.collection)}
        >
          <div
            className="events-img"
            style={{
              backgroundImage: `url(${evnt.image})`,
              backgroundPosition: `${evnt.bg_position}`,
            }}
          ></div>
          <p className="events-name">{evnt.event}</p>
        </Grid>
      ))}
    </Grid>
  );
};

export default Events;
