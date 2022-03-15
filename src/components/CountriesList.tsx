import React, { FC } from 'react'

import { useCountries } from '../hooks/useCountries'

import { Country } from '../interfaces/countriesInterface'
import CountryItem from './CountryItem'

const CountriesList: FC = () => {
  
  const {error, loading, data} = useCountries()

  if (! error && !loading ) {
    localStorage.setItem('countries', JSON.stringify(data.countries))
  }
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

