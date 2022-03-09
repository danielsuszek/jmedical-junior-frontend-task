import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from
} from "@apollo/client";

const link = from([
  // errorLink,
  new HttpLink({ uri: "https://countries.trevorblades.com/graphql" }),
]);

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

export default apolloClient