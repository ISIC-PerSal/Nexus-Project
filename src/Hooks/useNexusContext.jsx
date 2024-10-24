import React, { createContext, useState, useContext } from "react";

const NexusContext = createContext();

const NexusProvider = ({ children }) => {
  const [userId, setUserId] = useState(0);
  const [userType, setUserType] = useState("General");
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    birthday: "",
    age: 0,
    email: "",
    phone: "",
    rfce: "",
    clabe: "",
  });
  const [language, setLanguage] = useState("es");
  const [theme, setTheme] = useState("adulto");
  const [selectedOption, setSelectedOption] = useState("Noticias");

  const updateUserId = (id) => {
    setUserId(id);
  };

  const updateUserType = (type) => {
    setUserType(type);
  };

  const updateUserData = (value, name) => {
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(userData);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
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
        userId,
        updateUserId,
        userType,
        updateUserType,
        userData,
        updateUserData,
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
