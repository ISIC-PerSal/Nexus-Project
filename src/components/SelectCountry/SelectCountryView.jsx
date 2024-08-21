import Select from "react-select";
import React from 'react'
import PaisesProyecto from '../../util/location/PaisesProyecto'

function SelectCountryView({handleCountryChange, country}) {
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
              />
            </div>
    </>
  )
}

export default SelectCountryView