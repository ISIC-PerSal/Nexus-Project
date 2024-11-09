import React, { useEffect, useState } from "react";
import SelectCountryView from "./SelectCountryView";
import restructureSelect from "../../util/data/restructureSelect";
import PaisesProyecto from "../../util/location/PaisesProyecto";

function SelectCountry({ label, country, setCountry }) {
  const [countryOptions, setCountryOptions] = useState([]);
  const handleCountryChange = (selectedCountry) => {
    setCountry(selectedCountry.label.props.children[1]);
  };

  useEffect(() => {
    const paises = restructureSelect(PaisesProyecto);
    setCountryOptions(paises);
  }, [country]);

  return (
    <>
      <SelectCountryView
        label={label}
        handleCountryChange={handleCountryChange}
        country={country}
        countryOptions={countryOptions}
      />
    </>
  );
}

export default SelectCountry;
