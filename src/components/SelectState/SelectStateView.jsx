import Select from "react-select";
import React from "react";

function SelectStateView({ estados, state, handleStateChange }) {
  return (

      <div className="mb-3">
        <label htmlFor="pais" className="form-label">
          Estado/Provincia/Región
        </label>
        <Select
          placeholder="--"
          options={estados}
          defaultValue={state}
          onChange={handleStateChange}
        />
      </div>
    
  );
}

export default SelectStateView;
