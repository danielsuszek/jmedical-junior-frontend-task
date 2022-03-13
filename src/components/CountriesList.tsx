import React, { FC, useContext } from 'react'
import { ContinentContext } from '../context/ContinentContext'

import { useCountries } from '../hooks/useCountries'

import { Country } from '../interfaces/countriesInterface'
import CountryItem from './CountryItem'

const CountriesList: FC = () => {
  const {error, loading, data} = useCountries()
  // console.log({ error, loading, data });
  const continentContext = useContext(ContinentContext)

  console.log('from list', continentContext.continent?.value);
  
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

export default CountriesList

