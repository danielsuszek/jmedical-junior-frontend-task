import { gql, useQuery } from "@apollo/client";

export const GET_COUNTRIES = gql`
query {  
  countries {    
    code
    name        
  }  
}
`;

export const useCountries = () => {
  const { error, loading, data } = useQuery(GET_COUNTRIES)
  return {
    error, 
    loading,
    data
  }
}