import React from "react";
import Select from "react-select";

function SelectCityView({ label,cities, city, handleCityChange }) {
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
          defaultValue={city}
          onChange={handleCityChange}
        />
      </div>
    </>
  );
}

export default SelectCityView;
