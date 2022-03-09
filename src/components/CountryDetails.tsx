import React from 'react'
import { useParams } from 'react-router-dom';


import { useCountry } from '../hooks/useCountry'

const CountryDetails = () => {
  const { code } = useParams()
  
  const {data, loading, error} = useCountry(code!)
  console.log({data, loading, error});

  return (
    <div className="countryDetails">
      {loading ? (
        <h2>Ładowanie...</h2>
      ) : error ? (
        <h2>Coś poszło źle... </h2>
      ) : (
        <div>
          <div>
            {data.country.name}
          </div>
          <div>
            {data.country.code}
          </div>
          <div>
            {data.country.emoji}
          </div>
        </div>
      )}

    </div>
  )
}

export default CountryDetails