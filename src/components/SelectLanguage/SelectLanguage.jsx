import React, { useEffect, useState } from "react";
import SelectLSelectLanguageView from "./SelectLSelectLanguageView";

function SelectLanguage({ language, setLanguage }) {
  const languageArray = [
    {
      label: "English",
      value: "english",
    },
    {
      label: "Español",
      value: "spanish",
    },
  ];
  return (
    <>
      <SelectLSelectLanguageView
        language={language}
        setLanguage={setLanguage}
        languageArray={languageArray}
      />
    </>
  );
}

export default SelectLanguage;
