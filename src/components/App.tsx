import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { ApolloProvider } from '@apollo/client'
import { client } from '../apolloClient/apolloClient'

import CityDetailsPage from '../pages/CityDetailsPage'
import MainPage from '../pages/MainPage'
import { SelectedContinentContextProvider } from '../context/ContinentContext'
// import ContinentContext from '../context/ContinentContext'

const App: FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h2>Lista krajów</h2>
          <SelectedContinentContextProvider>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/:code" element={<CityDetailsPage />}/>
            </Routes>
          </SelectedContinentContextProvider>
      </div>
    </ApolloProvider>
  )
}

export default App