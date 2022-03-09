import { gql, useQuery } from "@apollo/client";

export const GET_COUNTRY = gql`
query GetCountry($id: ID!) {  
  country(code: $id) {    
    code
    name   
    languages {
      name
    }
    emoji
  }  
}
`;

export const useCountry = (id: string) => {
  const { error, loading, data } = useQuery(GET_COUNTRY, {
    variables: {
      id
    }
  })
  return {
    error, 
    loading,
    data
  }
}