import { gql, useQuery } from "@apollo/client";
import { Country } from "../interfaces/countriesInterface";

export const GET_COUNTRIES = gql`
query GetCountries {  
  countries {    
    code
    name        
  }  
}
`;

export const useGetCountries = (): Country[] | null => {
  const { data } = useQuery(GET_COUNTRIES)
  return data
}