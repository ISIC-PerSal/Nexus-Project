import React from "react";
import mex_cities from "../../util/location/mex_cities";
import SelectCityView from "./SelectCityView";

function SelectCity({ city, setCity, country, state }) {
  function filterCities(pais, estado) {
    switch (pais) {
      case "México":
        const ciudades = mex_cities.filter((item) => item.Estado == estado);
        return ciudades.filter(item=>item)
        break;

      default:
        break;
    }
  }
  const cities = filterCities(country, state)

  return (
    <>
      <SelectCityView cities={cities} city={city} setCity={setCity} />
    </>
  );
}

export default SelectCity;
