import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Country } from '../interfaces/countriesInterface'

interface CountryProps {
  country: Country
}

const CountryItem: FC<CountryProps> = ({country}: CountryProps) => {
  return (
    <div className="countryItem">
      <Link to={`/${country.code}`}>
        <div>
          <p>{country.name}</p>
          <p>{country.code}</p>          
        </div>
      </Link>
    </div>
  )
}

export default CountryItem