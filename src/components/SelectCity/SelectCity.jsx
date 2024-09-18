import React, { useEffect, useState } from "react";
import mex_cities from "../../util/location/mex_cities";
import SelectCityView from "./SelectCityView";
import arg_cities from "../../util/location/arg_cities";
import belice_cities from "../../util/location/belice_cities";
import bra_cities from "../../util/location/bra_cities";
import bolivia_cities from "../../util/location/bolivia_cities";
import Chile_cities from "../../util/location/Chile_cities";
import colombia_cities from "../../util/location/colombia_cities";
import costa_rica_cities from "../../util/location/costa_rica_cities";


function SelectCity({ city, setCity, country, state }) {
  const [cities, setCities] = useState([]);
  function filterCities(pais, estado) {
    switch (pais) {
      case "Argentina":
        return (
          arg_cities.find((item) => item.Estado === estado)?.Ciudades || []
        );
      case "Belice":
        return (
          belice_cities.find((item) => item.Estado === estado)?.Ciudades || []
        );
      case "Bolivia":
        return (
          bolivia_cities.find((item) => item.Estado === estado)?.Ciudades || []
        );
      case "Brasil":
        return (
          bra_cities.find((item) => item.Estado === estado)?.Ciudades || []
        );
      case "Chile":
        return (
          Chile_cities.find((item) => item.Estado === estado)?.Ciudades || []
        );
        case "Colombia":
        return (
          colombia_cities.find((item) => item.Estado === estado)?.Ciudades || []
        );
      case "México":
        return (
          mex_cities.find((item) => item.Estado === estado)?.Ciudades || []
        );
        case "México":
        return (
          costa_rica_cities.find((item) => item.Estado === estado)?.Ciudades || []
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
