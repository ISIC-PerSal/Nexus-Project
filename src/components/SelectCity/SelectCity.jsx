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
import cuba_cities from "../../util/location/cuba_cities";
import ecuador_cities from "../../util/location/ecuador_cities";
import elsalvador_cities from "../../util/location/elsalvador_cities";
import guatemala_cities from "../../util/location/guatemala_cities";
import honduras_cities from "../../util/location/honduras_cities";
import nicaragua_cities from "../../util/location/nicaragua_cities";
import panama_cities from "../../util/location/panama_cities";
import paraguay_cities from "../../util/location/paraguay_cities";
import peru_cities from "../../util/location/peru_cities";
import republica_dominicana_cities from "../../util/location/republica_dominicana_cities";
import uruguay_cities from "../../util/location/uruguay_cities";
import venezuela_cities from "../../util/location/venezuela_cities";
import puerto_rico_cities from "../../util/Location/puerto_rico_cities";

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
      case "Costa Rica":
        return (
          costa_rica_cities.find((item) => item.Estado === estado)?.Ciudades ||
          []
        );
      case "Cuba":
        return (
          cuba_cities.find((item) => item.Estado === estado)?.Ciudades || []
        );
      case "Ecuador":
        return (
          ecuador_cities.find((item) => item.Estado === estado)?.Ciudades || []
        );
      case "El Salvador":
        return (
          elsalvador_cities.find((item) => item.Estado === estado)?.Ciudades ||
          []
        );
      case "Guatemala":
        return (
          guatemala_cities.find((item) => item.Estado === estado)?.Ciudades ||
          []
        );
      case "Honduras":
        return (
          honduras_cities.find((item) => item.Estado === estado)?.Ciudades || []
        );
      case "Nicaragua":
        return (
          nicaragua_cities.find((item) => item.Estado === estado)?.Ciudades ||
          []
        );
      case "Panamá":
        return (
          panama_cities.find((item) => item.Estado === estado)?.Ciudades || []
        );
      case "Paraguay":
        return (
          paraguay_cities.find((item) => item.Estado === estado)?.Ciudades || []
        );
      case "Perú":
        return (
          peru_cities.find((item) => item.Estado === estado)?.Ciudades || []
        );
        case "Puerto Rico":
          return (
            puerto_rico_cities.find((item) => item.Estado === estado)?.Ciudades || []
          );
      case "República Dominicana":
        return (
          republica_dominicana_cities.find((item) => item.Estado === estado)
            ?.Ciudades || []
        );
      case "Uruguay":
        return (
          uruguay_cities.find((item) => item.Estado === estado)?.Ciudades || []
        );
      case "Venezuela":
        return (
          venezuela_cities.find((item) => item.Estado === estado)?.Ciudades ||
          []
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
