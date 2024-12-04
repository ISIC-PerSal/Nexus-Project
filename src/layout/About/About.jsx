import React, { useEffect } from "react";
import AboutView from "./AboutView";
import Navbar from "../../components/Navbar/Navbar";
import { useNexusContext } from "../../Hooks/useNexusContext";
import AboutTranslator from "../../components/About/AboutSectionTranslator";

function About() {
  const { changeNavbarItem } = useNexusContext();
  useEffect(() => {
    changeNavbarItem("Acerca");
  }, [changeNavbarItem]);

  const { language } = useNexusContext();

  const handleLanguage = (field, position) => {
    const item = AboutTranslator[language];
    if (position == undefined) {
      return item[field];
    } else {
      const positionValue = item[field];
      return positionValue[position];
    }
  };

  return (
    <>
    <Navbar/>
    <AboutView handleLanguage={handleLanguage}/>
    </>
  );
}

export default About;