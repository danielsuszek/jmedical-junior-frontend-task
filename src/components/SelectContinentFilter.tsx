import './selectContinentFilter.css'

import React, { FC, useContext } from 'react'
import Select from 'react-select'
import { ContinentContext } from '../context/ContinentContext';
import { CountryByNameContext } from '../context/CountryByNameContext';
import { useContinents } from '../hooks/useContinents';

interface Continent {
  name: string;
  code: string;
}

interface ContinentToSelect {
  label: string;
  value: string
}

const SelectContinentFilter: FC = () => {
  const {error, loading, data} = useContinents()
  
  const continents: Continent[] = (data) ? data.continents : []
  
  const continentContext = useContext(ContinentContext)
  const countryByNameContext = useContext(CountryByNameContext)
  
  const continentsToSelect: ContinentToSelect[] = [{
    label: 'Wszystko',
    value: 'all'
  }]

  
  continents.map((continent: Continent) => 
    continentsToSelect.push(
      {
        label: continent.name,
        value: continent.code
      }
    )
  )
  
  const onChangeContinent = (option: ContinentToSelect | null) => {
    // switch off filter by name
    countryByNameContext.setCountry(null)

    if (continentContext) {
      continentContext.setContinent({
        label: option?.label,
        value: option?.value
      })
    }
  }

  return (
    <div>
      {loading ? (
        <h2>Ładowanie...</h2>
      ) : error ? (
        <h2>Coś poszło źle... </h2>
      ) : (
        <div>
          <Select<ContinentToSelect>
            options={continentsToSelect}  
            onChange={onChangeContinent}       
            className='selectContinent'
          />
        </div>
      )}
    </div>
  )
}

export default SelectContinentFilter