import React, { useState } from "react";
import GlobalContext from "./GlobalState";

const GlobalProvider = ({ children }) => {
  const [showContent, setShowContent] = useState(true);
  const [loading, setLoading] = useState(true);

  const toggleShowContent = () => {
    setShowContent(!showContent);
  };

  return (
    <GlobalContext.Provider
      value={{ showContent, toggleShowContent, loading, setLoading }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
