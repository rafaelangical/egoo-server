import express from "express";
import { ApolloServer } from "apollo-server-express";
import { getToken } from "./src/modules/user/UserLoader";
import "./src/services/database";

import * as ProductType from "./src/modules/product/ProductType";
import * as CreatedByType from "./src/modules/createdby/CreatedByType";
import * as UserType from "./src/modules/user/UserType";
import * as DateType from "./src/modules/date/DateType";

const SchemaDefinition = `
  schema {
    query: Query
    mutation: Mutation
  }
  type Query {
    products: [Product]
    getProducts: [Product]
    getUsers: [User]
  }
  type Mutation {
    login(name: String, password: String, noAuth: Boolean): Token!
    addProduct(title: String, price: Int, createdby: CreatedByInput): Product
    createUser(name: String, password: String, noAuth: Boolean): Token!
    dev_addProduct(title: String, price: Int, createdby: CreatedByInput): Product
  }
`;

const typeDefs = [
  ProductType.typeDefs,
  CreatedByType.typeDefs,
  UserType.typeDefs,
  DateType.typeDefs
];

const resolvers = {
  Query: {
    ...ProductType.resolvers,
    ...UserType.resolvers
  },
  Mutation: {
    ...ProductType.mutations,
    ...UserType.mutations
  },
  ...DateType.resolvers
};

const server = new ApolloServer({
  typeDefs: [SchemaDefinition, ...typeDefs],
  resolvers,
  context: getToken
});

const app = express();
server.applyMiddleware({ app });

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
