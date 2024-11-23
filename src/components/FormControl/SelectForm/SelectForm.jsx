import React from "react";

function SelectForm({
  label = "Label",
  disable = false,
  options = [],
  value="",
  getValue = () => {},
}) {
  return (
    <div className="mb-3">
      <label htmlFor="tipo-lider" className="form-label">
        {label}
      </label>
      <select
        className="form-select"
        aria-label="Default select example"
        disabled={disable}
        value={value}
        onChange={(e) => getValue(e.target.value)}
      >
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectForm;
