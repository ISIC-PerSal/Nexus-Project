import React, { createContext, useState, useContext, useEffect } from "react";
import Cookies from "js-cookie"; // Importar js-cookie

const NexusContext = createContext();

const NexusProvider = ({ children }) => {
  const initialLanguage = Cookies.get("language")
    ? Cookies.get("language")
    : "english";

  const [language, setLanguage] = useState(initialLanguage);
  const [theme, setTheme] = useState("adulto");
  const [selectedOption, setSelectedOption] = useState("Noticias");

  const changeLanguage = (lang) => {
    setLanguage(lang);
    Cookies.set("language", lang, { expires: 30 });
  };

  const changeTheme = (theme) => {
    setTheme(theme);
  };

  const changeNavbarItem = (item) => {
    setSelectedOption(item);
  };

  return (
    <NexusContext.Provider
      value={{
        language,
        changeLanguage,
        theme,
        changeTheme,
        selectedOption,
        changeNavbarItem,
      }}
    >
      {children}
    </NexusContext.Provider>
  );
};

const useNexusContext = () => {
  return useContext(NexusContext);
};

export { NexusProvider, useNexusContext };
