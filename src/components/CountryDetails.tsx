import React from 'react'
import { useParams } from 'react-router-dom';


import { useCountry } from '../hooks/useCountry'

const CountryDetails = () => {
  const { code } = useParams()
  
  const {data, loading, error} = useCountry(code!)
  console.log({data, loading, error});
  
  return (
    <div>CountryDetails</div>
  )
}

export default CountryDetails