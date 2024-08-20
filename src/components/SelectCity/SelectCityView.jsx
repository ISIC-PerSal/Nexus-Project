import React, { useRef } from "react";
import Select from "react-select";

function SelectCityView({ cities, city, setCity }) {
  const ciudades = cities
  console.log(ciudades)
  return (
    <>
      <div className="mb-3">
        <label htmlFor="municipio" className="form-label">
          Municipio
        </label>
        <Select
          placeholder="Selecciona un municipio"
          options={ciudades}
          defaultValue={city}
        />
      </div>
    </>
  );
}

export default SelectCityView;
