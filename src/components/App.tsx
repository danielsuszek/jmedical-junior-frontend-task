import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { ApolloProvider } from '@apollo/client'
import { client } from '../apolloClient/apolloClient'

import CityDetailsPage from '../pages/CityDetailsPage'
import MainPage from '../pages/MainPage'

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h2>Lista krajów</h2>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:code" element={<CityDetailsPage />}/>
        </Routes>
      </div>
    </ApolloProvider>
  )
}

export default App