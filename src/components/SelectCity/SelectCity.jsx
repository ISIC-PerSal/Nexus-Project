import React from "react";
import SelectCityView from "./SelectCityView";
import mex_cities from "../../util/location/mex_cities";

function SelectCity(city, setCity, country, state) {
  function cities() {
    switch ("México") {
      case "México":
        return mex_cities.filter((item) => item.Estado == state)

        break;

      default:
        break;
    }
  }
  console.log(cities);
  return (
    <>
      <SelectCityView mex_cities={cities} city={city} setCity={setCity} />
    </>
  );
}

export default SelectCity;
