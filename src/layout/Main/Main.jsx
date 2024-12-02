import React, { useEffect } from "react";
import MainView from "./MainView";
import { useNexusContext } from "../../Hooks/useNexusContext";
import MainTranslator from "./MainTranslator";

function Main() {
  sessionStorage.clear();
  const { changeNavbarItem } = useNexusContext();
  useEffect(() => {
    changeNavbarItem("Noticias");
  }, [changeNavbarItem]);

  const { language } = useNexusContext();

  const handleLanguage = (field, position) => {
    const item = MainTranslator[language];
    if (position == undefined) {
      return item[field];
    } else {
      const positionValue = item[field];
      return positionValue[position];
    }
  };

  return (
    <>
      <MainView handleLanguage={handleLanguage}/>
    </>
  );
}

export default Main;
