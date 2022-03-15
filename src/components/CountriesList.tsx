import React, { FC, useEffect } from 'react'

import { useCountries } from '../hooks/useCountries'

import { Country } from '../interfaces/countriesInterface'
import CountryItem from './CountryItem'

// helpers
const setCountriesToLS = (countries: Country[]): void => {
  localStorage.setItem('countries', JSON.stringify(countries))
}

const getCountriesFromLS = (countryName: string) => {
  return JSON.parse(localStorage.getItem(countryName) || "")
}

const countriesToDisplay = () => {
  return getCountriesFromLS("countries")
}

const CountriesList: FC = () => {
  
  const {error, loading, data} = useCountries()

  if (! error && !loading ) { 
    setCountriesToLS(data.countries)
    // setCountriesToLS([{code: "PL", name: "Poland"}])
  }

  return (
    <div>
        {loading ? (
          <h2>Ładowanie...</h2>
        ) : error ? (
          <h2>Coś poszło źle... </h2>
        ) : (
          <div className="productpage">
            {countriesToDisplay().map((country: Country) =>              
              <CountryItem country={country} key={country.code} />
            )}
          </div>
        )}
      </div>
  )  
}

export default CountriesList

