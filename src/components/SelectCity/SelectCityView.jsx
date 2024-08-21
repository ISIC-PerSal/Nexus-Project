import React from "react";
import Select from "react-select";

function SelectCityView({ cities, city, handleCityChange }) {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="municipio" className="form-label">
          Municipio
        </label>
        <Select
          isSearchable={true}
          placeholder="Selecciona un municipio"
          options={cities}
          defaultValue={city}
          onChange={handleCityChange}
        />
      </div>
    </>
  );
}

export default SelectCityView;
