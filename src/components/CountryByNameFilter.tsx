import './countryByNameFilter.css'

import React, { FC, FormEvent, useState, useContext } from 'react'
import { ContinentContext } from '../context/ContinentContext'
import { CountryByNameContext } from '../context/CountryByNameContext'
import { getCountriesFromLS} from '../helpers/localstorage'

const CountryByNameFilter: FC = () => {
  const countriesFromLS = getCountriesFromLS('countries')

  const continentContext = useContext(ContinentContext)
  const countryContext = useContext(CountryByNameContext)
  
  
  const [searchCountry, setSearchCountry] = useState<string>('')
  const changeHandler = (e:FormEvent<HTMLInputElement>) => {
    const str = e.currentTarget.value    
    const re = /^[a-zA-Z\s]*$/;
    if (!re.test(str)) alert('Pole może zawierać tylko litery i spacje')

    setSearchCountry(e.currentTarget.value);
    
  }
  
  const submitHandler = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()  
    // switch off filter by continent
    continentContext.setContinent(null)
    
    if (searchCountry.trim() === '') alert('Pole nie może być puste')
    const foundCountry = countriesFromLS.filter((c) => c.name === searchCountry)
      
    if(foundCountry[0]) {
      countryContext.setCountry(foundCountry[0])
      setSearchCountry('');
    }
    else 
      countryContext.setCountry({code: 'brak', name: 'Nie znaleziono kraju'})
      setSearchCountry('');
  }

  return (
    <div className="filterByName">
      <form onSubmit={submitHandler}>
        <p>Podaj nazwę kraju po angielsku używając dużych liter np. Poland, Spain</p>        
        <input 
          type="text" 
          value={searchCountry} 
          onChange={changeHandler}
          className="inputFindByName"  
        />
          
        <button 
          type="submit"
          className="btnFindByName"
        
        >Szukaj kraju</button>
      </form>    
    </div>
  )
}

export default CountryByNameFilter