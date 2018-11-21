import * as CreatedByLoader from "./CreatedByLoader";

export const typeDefs = `
  type CreatedBy {
    id: ID!
    name: String!
    age: Int!
  }
  input CreatedByInput {
    name: String!
    age: Int!
  }
`;

export const resolvers = {
  createdsBy: () => CreatedByLoader.loadAllCreatedBy()
};
