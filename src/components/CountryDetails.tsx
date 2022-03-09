import React from 'react'
import { useCountry } from '../hooks/useCountry'

const CountryDetails = () => {
  const {data, loading, error} = useCountry("PL")
  console.log({data, loading, error});
  return (
    <div>CountryDetails</div>
  )
}

export default CountryDetails