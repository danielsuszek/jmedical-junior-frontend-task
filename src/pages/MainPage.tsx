import React, { FC } from 'react'
import { Country } from '../interfaces/countriesInterface'

interface CountriesProps {
  countries: Country[]
}

const MainPage: FC<CountriesProps> = ({countries}: CountriesProps) => {
  return (
    <div>
      <p>main page</p>
      {countries.map((country) => {
        return <p key={country.code}>{country.name}</p>
      })}
    </div>

  )
}

export default MainPage