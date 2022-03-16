import { Country } from "../interfaces/countriesInterface"

export const setCountriesToLS = (nameLS: string, countries: Country[]): void => {
  localStorage.setItem(nameLS, JSON.stringify(countries))
}

export const getCountriesFromLS = (countryName: string): Country[] => {
  return JSON.parse(localStorage.getItem(countryName) || "[]")
}

