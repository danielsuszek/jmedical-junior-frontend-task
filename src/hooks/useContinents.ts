import { gql, useQuery } from "@apollo/client";

export const GET_CONTINENTS = gql`
query {
  continents {
    name
    code  
  }
}
`;

export const useContinents = () => {
  const { error, loading, data } = useQuery(GET_CONTINENTS)
  return {
    error, 
    loading,
    data
  }
}