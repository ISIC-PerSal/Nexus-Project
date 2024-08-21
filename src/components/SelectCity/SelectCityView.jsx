import { Select } from '@mui/material';
import React from 'react'
function SelectCityView({cities, city, setCity}) {
  
  return(
  <div className="mb-3">
  <label htmlFor="municipio" className="form-label">Municipio</label>
  <Select
      placeholder="Selecciona un municipio"
      options={cities}
      defaultValue={city}
      onChange={(e) => setCity(e.label.props.children[1])}
  />
</div>
  )
}

export default SelectCityView;