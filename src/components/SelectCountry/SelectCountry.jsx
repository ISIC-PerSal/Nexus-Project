import React from "react";
import SelectCountryView from "./SelectCountryView";

function SelectCountry({ country, setCountry}) {
  const handleCountryChange = (selectedCountry) => {
    setCountry(selectedCountry.label.props.children[1]);
  };

  return (
    <>
      <SelectCountryView
        handleCountryChange={handleCountryChange}
        country={country}
      />
    </>
  );
}

export default SelectCountry;
