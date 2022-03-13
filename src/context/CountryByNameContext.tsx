import { createContext, useState } from "react"

type CountryByName = {
  name: string | null
}

type CountryByNameContextType = {
  country: CountryByName | null
  setCountry: React.Dispatch<React.SetStateAction<CountryByName | null>>; 
}

type CountryByNameProviderProps = {
  children: React.ReactNode  
}

export const CountryByNameContext = createContext( {} as CountryByNameContextType)

export const CountryByNameContextProvider = ({children}: CountryByNameProviderProps) => {
  const [country, setCountry] = useState<CountryByName | null>(null)
  return (
    <CountryByNameContext.Provider value={{country, setCountry}}>
      {children}
    </CountryByNameContext.Provider>
  )
}