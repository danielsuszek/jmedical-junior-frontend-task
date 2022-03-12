import React, { FC, useState, FormEvent, useEffect } from 'react'
import Select, { OptionProps, Options } from 'react-select'
import { useContinents } from '../hooks/useContinents';

interface Continent {
  name: String;
  code: String;
}

interface ContinentToSelect {
  label: String;
  value: String
}

const SelectContinentFilter: FC = () => {
  const {error, loading, data} = useContinents()
  
  const continents: Continent[] = (data) ? data.continents : []
  console.log(continents);

  const continentsToSelect: ContinentToSelect[] = [
    {
      "label": "Africa",
      "value": "AF"
    },
    {
      "label": "Antarctica",
      "value": "AN"
    },    
  ]  

  const [selectedContinent, setSelectedContinent] = useState({})  
  console.log(selectedContinent);

  const onChangeContinent = (option: ContinentToSelect | null) => {
    console.log(option);
    setSelectedContinent((option) => option)

  }
  
  return (
    <div>
      {loading ? (
        <h2>Ładowanie...</h2>
      ) : error ? (
        <h2>Coś poszło źle... </h2>
      ) : (
        <div>
          SelectContinentFilter
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