import React, { useEffect } from "react";
import AboutSectionView from "./AboutSectionView";

function AboutSection({handleLanguage}) {
  
  return (
    <>
      <AboutSectionView handleLanguage={handleLanguage}/>
    </>
  );
}

export default AboutSection;
