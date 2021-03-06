import React, { FC, useContext, useEffect, useState } from 'react'
import CountriesByContinent from '../components/CountriesByContinent';

import CountriesList from '../components/CountriesList';
import CountryByName from '../components/CountryByName';

import FilterCountries from '../components/FilterCountries';
import { ContinentContext } from '../context/ContinentContext';
import { CountryByNameContext } from '../context/CountryByNameContext';

const MainPage: FC = () => {
  
  const continentContext = useContext(ContinentContext)
  const countryByNameContext = useContext(CountryByNameContext)
  
  return (
    <div>
      <p>Strona główna</p>
        <FilterCountries />
        {(continentContext.continent && continentContext.continent.value !== 'all') ? (
          <CountriesByContinent /> )
        : (countryByNameContext.country ) ? 
        (
          <CountryByName />
        ) 
        : (
          <CountriesList />
        )}        
    </div>

  )
}

export default MainPage