import React, { useState } from "react";

const PageContext = React.createContext();

const PageProvider = (props) => {
  const [atHome, setAtHome] = useState(true);
  const [collection, setCollection] = useState("");
  const [imageIndex, setImageIndex] = useState(null);

  const activateHome = () => {
    setAtHome(true);
  };

  const deactivateHome = () => {
    setAtHome(false);
  };

  const chooseFaces = () => {
    setCollection("faces");
  };

  const chooseImgIdx = (id) => {
    setImageIndex(id - 1);
  };

  return (
    <PageContext.Provider
      value={{
        atHome,
        collection,
        imageIndex,
        activateHome,
        deactivateHome,
        chooseFaces,
        chooseImgIdx,
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
};

const PageConsumer = PageContext.consumer;

export { PageContext, PageConsumer };

export default PageProvider;
