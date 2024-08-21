import React, { useEffect, useState } from "react";
import SelectStateView from "./SelectStateView";
import Chile from "../../util/location/Chile";
import Argentina from "../../util/location/Argentina";
import Belice from "../../util/location/Belice";
import Bolivia from "../../util/location/Bolivia";
import Brasil from "../../util/location/Brasil";
import CostaRica from "../../util/location/CostaRica";
import Cuba from "../../util/location/Cuba";
import Colombia from "../../util/location/Colombia";
import Ecuador from "../../util/location/Ecuador";
import Guatemala from "../../util/location/Guatemala";
import ElSalvador from "../../util/location/ElSalvador";
import Honduras from "../../util/location/Honduras";
import Uruguay from "../../util/location/Uruguay";
import Mexico from "../../util/location/Mexico";
import Nicaragua from "../../util/location/Nicaragua";
import Panama from "../../util/location/Panama";
import Peru from "../../util/location/Peru";
import RepublicaDominicana from "../../util/location/RepublicaDominicana";
import Venezuela from "../../util/location/Venezuela";
import Paraguay from "../../util/location/Paraguay";

function SelectState({ state, setState, country }) {
  const [estadosArray, setEstadosArray] = useState([]);

  const countryArray = [
    { Pais: "Argentina", Estados: Argentina },
    { Pais: "Belice", Estados: Belice },
    { Pais: "Bolivia", Estados: Bolivia },
    { Pais: "Brasil", Estados: Brasil },
    { Pais: "Chile", Estados: Chile },
    { Pais: "Colombia", Estados: Colombia },
    { Pais: "Costa Rica", Estados: CostaRica },
    { Pais: "Cuba", Estados: Cuba },
    { Pais: "Ecuador", Estados: Ecuador },
    { Pais: "El Salvador", Estados: ElSalvador },
    { Pais: "Guatemala", Estados: Guatemala },
    { Pais: "Honduras", Estados: Honduras },
    { Pais: "México", Estados: Mexico },
    { Pais: "Nicaragua", Estados: Nicaragua },
    { Pais: "Panamá", Estados: Panama },
    { Pais: "Paraguay", Estados: Paraguay },
    { Pais: "Perú", Estados: Peru },
    { Pais: "República Dominicana", Estados: RepublicaDominicana },
    { Pais: "Uruguay", Estados: Uruguay },
    { Pais: "Venezuela", Estados: Venezuela },
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
