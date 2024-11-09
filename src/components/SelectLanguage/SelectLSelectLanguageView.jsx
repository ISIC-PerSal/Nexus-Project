import React from "react";
import "./SelectLSelectLanguage.css";

function SelectLSelectLanguageView({ languageArray, language, setLanguage }) {
  return (
    <>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="select-language"
      >
        {languageArray.map((item, index) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </>
  );
}

export default SelectLSelectLanguageView;
