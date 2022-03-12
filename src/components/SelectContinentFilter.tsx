import React, { FC, useState, FormEvent, useEffect } from 'react'
import Select, { OptionProps, Options } from 'react-select'


interface ContinentToSelect {
  label: String;
  value: String
}



// interface Continents {
//   continents: Continent[]
// }



const SelectContinentFilter: FC = () => {
  const continents: ContinentToSelect[] = [
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
  
  // const handleOnClick = () => {
  //   console.log('click');
  //   continents.push({
  //     "label": "test1",
  //     "value": "test2"  
  //   })
  // }
  
  console.log(selectedContinent);
  const onChangeContinent = (option: ContinentToSelect | null) => {
    console.log(option);
    setSelectedContinent((option) => option)

  }
  return (
    <div>
      SelectContinentFilter
      <Select<ContinentToSelect>
        options={continents}  
        onChange={onChangeContinent}        
      />
    </div>
  )
}

export default SelectContinentFilter