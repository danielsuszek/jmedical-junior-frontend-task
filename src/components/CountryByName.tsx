import React, { FC, useContext } from 'react'
import { Link } from 'react-router-dom';

import { CountryByNameContext } from '../context/CountryByNameContext'

const CountryByName: FC = () => {
  const countryContext = useContext(CountryByNameContext)
    console.log(countryContext.country);
  return (
    // <div>
    //   {countryContext.country?.name}
    //   {countryContext.country?.code}
    // </div>
        // <div className="countryItem">
        //   <div className="countryItem__content">
        //     <p className="countryItem__name">Nazwa: {countryContext.country?.name}</p>
        //     <p className="countryItem__code">Kod: {countryContext.country?.code}</p>          
        //   </div>
        // </div>
    <div>
      {(countryContext.country?.code === 'brak') ? (
          <div className="countryItem">
            <div className="countryItem__content">
              <p className="countryItem__name">Nazwa: {countryContext.country?.name}</p>
              <p className="countryItem__code">Kod: {countryContext.country?.code}</p>          
            </div>
          </div>
        ) : (
          <div className="countryItem">
            <Link to={`/${countryContext.country?.code}`}>
              <div className="countryItem__content">
                <p className="countryItem__name">Nazwa: {countryContext.country?.name}</p>
                <p className="countryItem__code">Kod: {countryContext.country?.code}</p>          
              </div>
            </Link>
          </div>
      )}
    </div>
  )
}

export default CountryByName