import { ApolloServer, gql } from 'apollo-server';
import { itemList, status, categories } from './data/mockDatabase.js';
import typeDefs from './schema.js';
import Query from './resolvers/query.js';
import Categories from './resolvers/categories.js';
import Status from './resolvers/status.js';

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Categories,
    Status,
  },
  context: {
    itemList,
    categories,
    status,
  },
});

server.listen().then(({ url }) => {
  console.log(`server running at ${url}`);
});
