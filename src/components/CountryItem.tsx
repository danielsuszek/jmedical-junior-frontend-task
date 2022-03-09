import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { Country } from '../interfaces/countriesInterface'

import './countryItem.css'

interface CountryProps {
  country: Country
}

const CountryItem: FC<CountryProps> = ({country}: CountryProps) => {
  return (
    <div className="countryItem">
      <Link to={`/${country.code}`}>
        <div className="countryItem__content">
          <p className="countryItem__name">Nazwa: {country.name}</p>
          <p className="countryItem__code">Kod: {country.code}</p>          
        </div>
      </Link>
    </div>
  )
}

export default CountryItem