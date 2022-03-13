import React, { FC, useContext, useState } from 'react'
import Select from 'react-select'
import { ContinentContext } from '../context/ContinentContext';
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
  
  const continentsToSelect: ContinentToSelect[] = []

  continents.map((continent: Continent) => 
    continentsToSelect.push(
      {
        label: continent.name,
        value: continent.code
      }
    )
  )
    
  
  const onChangeContinent = (option: ContinentToSelect | null) => {
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
          />
        </div>
      )}
    </div>
  )
}

export default SelectContinentFilter