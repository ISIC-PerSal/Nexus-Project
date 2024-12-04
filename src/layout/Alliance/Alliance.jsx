import React, { useEffect } from "react";
import AllianceView from "./AllianceView";
import Navbar from "../../components/Navbar/Navbar";
import { useNexusContext } from "../../Hooks/useNexusContext";
import AllianceTranslator from "./AlliancetTranslator";

function Alliance() {
  const { changeNavbarItem } = useNexusContext();
  useEffect(() => {
    changeNavbarItem("Alianza");
  }, [changeNavbarItem]);

  const { language } = useNexusContext();

  const handleLanguage = (field, position) => {
    const item = AllianceTranslator[language];
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
      <AllianceView handleLanguage={handleLanguage}/>
    </>
  );
}

export default Alliance;
