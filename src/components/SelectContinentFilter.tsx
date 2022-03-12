import React, { FC, useState, FormEvent } from 'react'
import Select, { OptionProps, Options } from 'react-select'





interface Continent {
  label: String;
  value: String
}

const continents: Continent[] = [
      {
        "label": "Africa",
        "value": "AF"
      },
      {
        "label": "Antarctica",
        "value": "AN"
      },    
    ]  

// interface Continents {
//   continents: Continent[]
// }



const SelectContinentFilter: FC = () => {
  const [selectedContinent, setSelectedContinent] = useState({})
  
  console.log(selectedContinent);
  const onChangeContinent = (option: Continent | null) => {
    console.log(option);
    setSelectedContinent((option) => option)

  }
  
  return (
    <div>
      SelectContinentFilter
      <Select<Continent>
        options={continents}  
        onChange={onChangeContinent}
      />
    </div>
  )
}

export default SelectContinentFilter