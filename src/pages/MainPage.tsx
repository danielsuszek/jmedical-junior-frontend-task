import React, { FC } from 'react'
import { useGetCountries } from '../hooks/getCountries'
import { Country } from '../interfaces/countriesInterface'

// interface CountriesProps {
//   countries: Country[]
// }

const MainPage: FC = () => {
    const countries = useGetCountries()
    console.log(countries);
  
  return (
    <div>
      <p>main page</p>
      {/* {countries.map((country) => 
        <CountryItem key={country.name} country={country} />
      )}   */}
    </div>

  )
}

export default MainPage