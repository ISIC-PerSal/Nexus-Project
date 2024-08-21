import React from 'react'
import mex_cities from '../../util/location/mex_cities'

function SelectCityView({ cities, city, setCity }) {
  return (
    <div className="mb-3">
      <label htmlFor="municipio" className="form-label">Municipio</label>
      <Select
        placeholder="Selecciona un municipio"
        options={cities}
        dafaultValue={city}
        onChange={(e) => setCity(e.label.props.children[1])}
      />
    </div>
  )
}

export default SelectCityView