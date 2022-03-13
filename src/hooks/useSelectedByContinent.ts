import { gql, useQuery } from "@apollo/client";

export const GET_COUTRIES_BY_CONTINENT = gql`
query GetCountriesByContinent($code: String) {
  countries(filter: {
      continent: { eq: $code }
    }) 
  {
    name,
    code 
  }
}
`
export const useCountriesByContinent = (code: String) => {
  const { error, loading, data } = useQuery(GET_COUTRIES_BY_CONTINENT, {
    variables: {
      code
    }
  })
  return {
    error, 
    loading,
    data
  }
}