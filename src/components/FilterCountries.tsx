import React from 'react'
import CountryByNameFilter from './CountryByNameFilter'
import SelectContinentFilter from './SelectContinentFilter'

const FilterCountries = () => {
  return (
    <div className="filterCountries">
      <SelectContinentFilter />
      <CountryByNameFilter />
    </div>
  )
}

export default FilterCountries