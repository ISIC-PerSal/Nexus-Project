import React from "react";
import Select from "react-select";

function SelectCityView({ label, cities, city, handleCityChange }) {
  const index = cities.findIndex((item) => item.value == city);
  return (
    <>
      <div className="mb-3">
        <label htmlFor="municipio" className="form-label">
          {label}
        </label>
        <Select
          isSearchable={true}
          placeholder="Selecciona un municipio"
          options={cities}
          value={cities[index]}
          onChange={handleCityChange}
        />
      </div>
    </>
  );
}

export default SelectCityView;
