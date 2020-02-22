import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    hello: String!
    cats: [Cat!]!
    cat(name: String!): [Cat!]!
  }

  type Cat {
    id: ID!
    name: String!
  }

  type Mutation {
    createCat(name: String!): Cat!
    deleteCat(name: String!): String!
    updateCat(name: String!, newName: String!): String!
  }
`;
