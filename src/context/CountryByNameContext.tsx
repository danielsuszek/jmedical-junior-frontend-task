import { createContext, useState } from "react"
import { Country } from "../interfaces/countriesInterface";


type CountryByNameContextType = {
  country: Country | null
  setCountry: React.Dispatch<React.SetStateAction<Country | null>>; 
}

type CountryByNameProviderProps = {
  children: React.ReactNode  
}

export const CountryByNameContext = createContext( {} as CountryByNameContextType)

export const CountryByNameContextProvider = ({children}: CountryByNameProviderProps) => {
  const [country, setCountry] = useState<Country | null>(null)
  return (
    <CountryByNameContext.Provider value={{country, setCountry}}>
      {children}
    </CountryByNameContext.Provider>
  )
}