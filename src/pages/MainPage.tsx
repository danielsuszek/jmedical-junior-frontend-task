import React, { FC } from 'react'
import CountryItem from '../components/CountryItem'
import { Country } from '../interfaces/countriesInterface'

interface CountriesProps {
  countries: Country[]
}

const MainPage: FC<CountriesProps> = ({countries}: CountriesProps) => {
  return (
    <div>
      <p>main page</p>
      {countries.map((country) => 
        <CountryItem key={country.name} country={country} />
      )}  
    </div>

  )
}

export default MainPage