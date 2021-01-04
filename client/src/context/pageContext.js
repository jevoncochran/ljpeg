import React, { useState } from "react";

const PageContext = React.createContext();

const PageProvider = (props) => {
  const [atHome, setAtHome] = useState(true);

  const activateHome = () => {
    setAtHome(true);
  };

  const deactivateHome = () => {
    setAtHome(false);
  };

  return (
    <PageContext.Provider value={{ atHome, activateHome, deactivateHome }}>
      {props.children}
    </PageContext.Provider>
  );
};

const PageConsumer = PageContext.consumer;

export { PageContext, PageConsumer };

export default PageProvider;
