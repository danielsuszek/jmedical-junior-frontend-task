import React, { FC, useContext } from 'react'
import CountriesByContinent from '../components/CountriesByContinent';

import CountriesList from '../components/CountriesList';

import FilterCountries from '../components/FilterCountries';
import { ContinentContext } from '../context/ContinentContext';

const MainPage: FC = () => {
  const continentContext = useContext(ContinentContext)
  
  return (
    <div>
      <p>Strona główna</p>
        <FilterCountries />
        {(continentContext.continent && continentContext.continent.value !== 'all') ? 
            <CountriesByContinent />:
            <CountriesList />
        }
        
    </div>

  )
}

export default MainPage