import React, { FC } from 'react'

import { useQuery } from '@apollo/client';

import { Country } from '../interfaces/countriesInterface'
import CountryItem from './CountryItem'
import { GET_COUNTRIES } from '../GraphQL/getCountries';

const CountriesList: FC = () => {
  const { error, loading, data } = useQuery(GET_COUNTRIES)
  // console.log({ error, loading, data });
  
  return (
    <div>
      {loading ? (
        <h2>Ładowanie...</h2>
      ) : error ? (
        <h2>Coś poszło źle... {error}</h2>
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

