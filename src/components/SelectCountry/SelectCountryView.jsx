import Select from "react-select";
import React from "react";
import PaisesProyecto from "../../util/Location/PaisesProyecto";

function SelectCountryView({ handleCountryChange, country }) {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="pais" className="form-label">
          País
        </label>
        <Select
          placeholder="--"
          options={PaisesProyecto}
          defaultValue={country}
          onChange={handleCountryChange}
          isSearchable={true}
        />
      </div>
    </>
  );
}

export default SelectCountryView;
