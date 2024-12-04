import Select from "react-select";
import React from "react";

function SelectCountryView({
  label,
  handleCountryChange,
  country,
  countryOptions,
}) {
  const index = countryOptions.findIndex((item) => item.value == country);
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
          value={country ? countryOptions[index] : null}
          onChange={handleCountryChange}
          isSearchable={true}
        />
      </div>
    </>
  );
}

export default SelectCountryView;
