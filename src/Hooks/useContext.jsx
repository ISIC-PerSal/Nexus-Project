import React, { createContext, useState, useContext } from "react";

const NexusContext = createContext();

export const useNexus = () => useContext(NexusContext);

export const NexusProvider = ({ children }) => {
  const [selected, setSelected] = useState("Noticias");

  return (
    <NexusContext.Provider value={{ selected, setSelected }}>
      {children}
    </NexusContext.Provider>
  );
};
