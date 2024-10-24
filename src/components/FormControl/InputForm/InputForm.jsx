import React from "react";

function InputForm({
  label = "Label",
  disable = false,
  setValue,
  getValue = () => {},
  type = "text",
  maxLength = 500,
  minLength = 1,
}) {
  return (
    <>
      <div className="mb-3">
        <label htmlFor={label} className="form-label">
          {label}
        </label>
        <input
          disabled={disable}
          type={type}
          maxLength={maxLength}
          minLength={minLength}
          className="form-control"
          id={label}
          value={setValue}
          onChange={(e) => getValue(e.target.value)}
        ></input>
      </div>
    </>
  );
}

export default InputForm;
