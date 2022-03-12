import React, { FC } from 'react'

import CountriesList from '../components/CountriesList';
import FilterCountries from '../components/FilterCountries';

const MainPage: FC = () => {
    
  return (
    <div>
      <p>Strona główna</p>
        <FilterCountries />
        <CountriesList />
    </div>

  )
}

export default MainPage