import React, { useEffect } from "react";
import DirectoryView from "./DirectoryView";
import Navbar from "../../components/Navbar/Navbar";
import { useNexusContext } from "../../Hooks/useNexusContext";
import DirectoryTranslator from "./DirectoryTranslator";

function Directory() {
  const { changeNavbarItem } = useNexusContext();
  useEffect(() => {
    changeNavbarItem("Directorio");
  }, [changeNavbarItem]);

  const { language } = useNexusContext();

  const handleLanguage = (field, position) => {
    const item = DirectoryTranslator[language];
    if (position == undefined) {
      return item[field];
    } else {
      const positionValue = item[field];
      return positionValue[position];
    }
  };

  return (
    <>
      <Navbar />
      <DirectoryView handleLanguage={handleLanguage}/>
    </>
  );
}

export default Directory;
