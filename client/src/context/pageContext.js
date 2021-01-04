import React, { useState } from "react";

const PageContext = React.createContext();

const PageProvider = (props) => {
  const [atHome, setAtHome] = useState(true);
  const [collection, setCollection] = useState("");
  const [imageIndex, setImageIndex] = useState(null);
  const [rootPath, setRootPath] = useState("");

  const activateHome = () => {
    setAtHome(true);
  };

  const deactivateHome = () => {
    setAtHome(false);
  };

  const chooseCollection = (collection) => {
    setCollection(collection);
  };

  const chooseImgIdx = (id) => {
    setImageIndex(id - 1);
  };

  const changeRootPath = (newPath) => {
    setRootPath(newPath);
  };

  return (
    <PageContext.Provider
      value={{
        atHome,
        collection,
        imageIndex,
        rootPath,
        activateHome,
        deactivateHome,
        chooseCollection,
        chooseImgIdx,
        changeRootPath,
      }}
    >
      {props.children}
    </PageContext.Provider>
  );
};

const PageConsumer = PageContext.consumer;

export { PageContext, PageConsumer };

export default PageProvider;
