import { gql } from "@apollo/client";

// Define a GraphQL fragment for product fields
const ProductFields = gql`
  fragment ProductFields on Product {
    id
    name
    category
    description
    ingredients
    availability
    image
    priceSmall
    priceMedium
    priceLarge
    stock
    rating
  }
`;

// Use the fragment in your query
export const GET_PRODUCTS = gql`
  query GetProducts {
    getProducts {
      ...ProductFields
    }
  }
  ${ProductFields}
`;
