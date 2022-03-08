import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import CityDetailsPage from '../pages/CityDetailsPage'

import MainPage from '../pages/MainPage'

const App: FC = () => {
  const countries =
  [
    {
      "code": "AD",
      "name": "Andorra"
    },
    {
      "code": "AE",
      "name": "United Arab Emirates"
    },
  ]

  return (
    <div>
      <h2>List of countries</h2>
      <Routes>
        <Route path="/" element={<MainPage countries={countries}/>} />
        <Route path="/:code" element={<CityDetailsPage />}/>
      </Routes>
    </div>
  )
}

export default App