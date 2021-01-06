import React, { useState } from "react";

const PageContext = React.createContext();

const PageProvider = (props) => {
  // indicates whether on home page or not
  // need this because Nav styling is different on home page than on all other pages
  const [atHome, setAtHome] = useState(true);

  // determines which
  const [collection, setCollection] = useState("");

  // used to get image id to be used as parameter when clicking on individual image in showcase
  // image id also used as key when mapping through array holding images
  const [imageIndex, setImageIndex] = useState(null);

  // controls the URL path which facilitates routing to correct path when clicking on individual images in showcase
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
