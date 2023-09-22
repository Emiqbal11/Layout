import React, { createContext } from "react";

const GlobalContext = createContext({
  showContent: false,
  loading: true,
  toggleShowContent: () => {},
  setLoading: () => {},
});

export default GlobalContext;
