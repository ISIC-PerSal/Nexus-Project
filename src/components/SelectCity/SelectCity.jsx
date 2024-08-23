import React, { useEffect, useState } from "react";
import mex_cities from "../../util/location/mex_cities";
import SelectCityView from "./SelectCityView";
import arg_cities from "../../util/location/arg_cities";
import bra_cities from "../../util/location/bra_cities";

function SelectCity({ city, setCity, country, state }) {
  const [cities, setCities] = useState([]);
  function filterCities(pais, estado) {
    switch (pais) {
      case "Argentina":
        return (
          arg_cities.find((item) => item.Estado === estado)?.Ciudades || []
        );
        case "Brasil":
        return (
          bra_cities.find((item) => item.Estado === estado)?.Ciudades || []
        );
      case "México":
        return (
          mex_cities.find((item) => item.Estado === estado)?.Ciudades || []
        );
      default:
        return [];
    }
  }

  useEffect(() => {
    const citiesOptions = filterCities(country, state);
    const cities =
      citiesOptions.map((ciudad) => ({
        label: ciudad,
        value: ciudad,
      })) || [];
    setCities(cities);
  }, [state]);

  const handleCityChange = (selectedCity) => {
    setCity(selectedCity.value);
  };
  return (
    <>
      <SelectCityView
        cities={cities}
        city={city}
        handleCityChange={handleCityChange}
        key={state}
      />
    </>
  );
}

export default SelectCity;
