import React, { useEffect, useState } from "react";
import SelectStateView from "./SelectStateView";

import Argentina from "../../util/location/Argentina";

import Mexico from "../../util/location/Mexico";


function SelectState({ state, setState, country }) {
  const [estadosArray, setEstadosArray] = useState([]);

  const countryArray = [
    { Pais: "Argentina", Estados: Argentina },
    { Pais: "México", Estados: Mexico },
    { Pais: "Todos", Estados: [] },
  ];

  const handleStateChange = (selectedState) => {
    const selectedStateName = selectedState?.label?.props?.children[1] || "";
    setState(selectedStateName);
  };

  useEffect(() => {
    setState("");
    const countryData = countryArray.find((item) => item.Pais === country);
    const estados = countryData ? countryData.Estados : [];
    setEstadosArray(estados);
  }, [country]);

  return (
    <>
      <SelectStateView
        estados={estadosArray}
        state={state}
        handleStateChange={handleStateChange}
        key={country}
      />
    </>
  );
}

export default SelectState;
