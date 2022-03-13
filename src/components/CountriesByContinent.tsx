import React, { useContext } from 'react'

import { ContinentContext } from '../context/ContinentContext'
import { useCountriesByContinent } from '../hooks/useSelectedByContinent'

import { Country } from '../interfaces/countriesInterface'
import CountryItem from './CountryItem'


const CountriesByContinent = () => {
  const continentContext = useContext(ContinentContext)

  let code = (continentContext.continent?.value) ? continentContext.continent?.value : ''
  
  const {error, loading, data} = useCountriesByContinent(code)

  return (
    <div>
    {loading ? (
      <h2>Ładowanie...</h2>
    ) : error ? (
      <h2>Coś poszło źle... </h2>
    ) : (
      <div className="productpage">
        {data.countries.map((country: Country) =>              
          <CountryItem country={country} key={country.code} />
        )}
      </div>
    )}
  </div>

  )
}

export default CountriesByContinent