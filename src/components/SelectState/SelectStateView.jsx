import React from "react";
import Select from "react-select";

function SelectStateView({ label, estados, state, handleStateChange, index }) {

  return (
    <>
      <div className="mb-3">
        <label htmlFor="pais" className="form-label">
          {label}
        </label>
        <Select
          placeholder="--"
          options={estados}
          value={estados[index]}
          onChange={handleStateChange}
          isSearchable={true}
        />
      </div>
    </>
  );
}

export default SelectStateView;
