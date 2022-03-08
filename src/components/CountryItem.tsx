import React, { FC } from 'react'
import { Country } from '../interfaces/countriesInterface'

interface CountryProps {
  country: Country
}

const CountryItem: FC<CountryProps> = ({country}: CountryProps) => {
  return (
    <div className="countryItem">
      <ul>
        <li>{country.name}</li>
        <li>{country.code}</li>
      </ul>
    </div>
  )
}

export default CountryItem