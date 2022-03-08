import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import CityDetailsPage from '../pages/CityDetailsPage'

import MainPage from '../pages/MainPage'

const App: FC = () => {
  return (
    <div>
      <h2>List of countries</h2>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:code" element={<CityDetailsPage />}/>
      </Routes>
    </div>
  )
}

export default App