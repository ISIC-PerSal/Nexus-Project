import React, { useEffect, useState } from "react";
import SelectStateView from "./SelectStateView";
import Chile from "../../util/Location/Chile";
import Argentina from "../../util/Location/Argentina";
import Belice from "../../util/Location/Belice";
import Bolivia from "../../util/Location/Bolivia";
import Brasil from "../../util/Location/Brasil";
import CostaRica from "../../util/Location/CostaRica";
import Cuba from "../../util/Location/Cuba";
import Colombia from "../../util/Location/Colombia";
import Ecuador from "../../util/Location/Ecuador";
import Guatemala from "../../util/Location/Guatemala";
import ElSalvador from "../../util/Location/ElSalvador";
import Honduras from "../../util/Location/Honduras";
import Uruguay from "../../util/Location/Uruguay";
import Mexico from "../../util/Location/Mexico";
import Nicaragua from "../../util/Location/Nicaragua";
import Panama from "../../util/Location/Panama";
import Peru from "../../util/Location/Peru";
import RepublicaDominicana from "../../util/Location/RepublicaDominicana";
import Venezuela from "../../util/Location/Venezuela";
import Paraguay from "../../util/Location/Paraguay";

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
