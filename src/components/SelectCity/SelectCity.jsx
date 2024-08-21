import React, { useEffect, useState } from "react";
import mex_cities from "../../util/location/mex_cities";
import SelectCityView from "./SelectCityView";

function SelectCity({ city, setCity, country, state }) {
  const [cities, setCities] = useState([]);
  function filterCities(pais, estado) {
    switch (pais) {
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
