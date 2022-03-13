import React, { FC, useState } from 'react'
import Select from 'react-select'
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
  // const continentsToSelect: ContinentToSelect[] = [
  //   {
  //     "label": "Africa",
  //     "value": "AF"
  //   },
  //   {
  //     "label": "Antarctica",
  //     "value": "AN"
  //   },    
  // ]  
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
    console.log('selected option from state', option?.value);
    

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