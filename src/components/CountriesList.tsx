import React, { FC } from 'react'

import { useQuery } from '@apollo/client';

import { Country } from '../interfaces/countriesInterface'
import CountryItem from './CountryItem'
import { GET_COUNTRIES } from '../GraphQL/getCountries';

const CountriesList: FC = () => {
  const { error, loading, data } = useQuery(GET_COUNTRIES)
  // console.log({ error, loading, data });

  if (loading) return <div>Ładowanie...</div>

  if (error) return <div>Coś poszło nie tak...</div>
  
  return (
    <div className="countriesList">
      {data.countries.map((country: Country) =>              
        <CountryItem country={country} key={country.code} />
      )}
    </div>
  )
}

export default CountriesList