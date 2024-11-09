import Select from "react-select";
import React from "react";
import PaisesProyecto from "../../util/location/PaisesProyecto";

function SelectCountryView({ label, handleCountryChange, country, countryOptions }) {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="pais" className="form-label">
          {label}
        </label>
        <Select
          placeholder="--"
          options={countryOptions}
          defaultValue={country}
          onChange={handleCountryChange}
          isSearchable={true}
        />
      </div>
    </>
  );
}

export default SelectCountryView;
