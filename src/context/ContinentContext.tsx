import { createContext, useState } from "react"

export type SelectedContinent = {
  label: string | undefined;
  value: string | undefined;
}

type SelectedContinentContextType = {
  continent: SelectedContinent | null
  setContinent: React.Dispatch<React.SetStateAction<SelectedContinent | null>>; 
}

type SelectedContinentProviderProps = {
  children: React.ReactNode
}

export const ContinentContext = createContext({} as SelectedContinentContextType)

export const SelectedContinentContextProvider = ({children}: SelectedContinentProviderProps) => {
  const [continent, setContinent] = useState<SelectedContinent |null>(null)

  return (
    <ContinentContext.Provider value={{ continent, setContinent }}>
      {children}
    </ContinentContext.Provider>
  )  
}
