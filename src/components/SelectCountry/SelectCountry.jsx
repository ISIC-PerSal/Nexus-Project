import React from 'react'
import SelectCountryView from './SelectCountryView'

function SelectCountry({handleCountryChange, country}) {
  <>
  Pais
    <SelectCountryView handleCountryChange={handleCountryChange} country={country}/>
  </>
}

export default SelectCountry