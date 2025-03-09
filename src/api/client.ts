import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";

const API_URL = process.env.EXPO_PUBLIC_API_URL as string; // Replace with your actual GraphQL API URL

export const link = createHttpLink({
  uri: "http://192.168.0.113:4000/graphql",
  fetch: require("node-fetch"), // For React Native, use 'node-fetch'
});
export const graphqlClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
