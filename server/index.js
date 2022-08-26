import { ApolloServer, gql } from 'apollo-server';
import { itemList, status, categories } from './data/mockDatabase.js';

const typeDefs = gql`
  type ItemList {
    id: Int!
    name: String!
    price: Float!
    description: String!
    status: String!
    img: String!
    rate: Float!
  }
  type Categories {
    category_id: Int
    title: String
  }
  type Status {
    status_id: Int
    title: String
  }
  type Query {
    itemList: [ItemList]
    item(id: Int!): ItemList
    categories: [Categories]
    category(category_id: Int!): Categories
    status: [Status]
    statu(status_id: Int!): Status
  }
`;
const resolvers = {
  Query: {
    itemList: () => itemList,
    item: (parent, arg) => {
      let item = itemList.find((item) => {
        return item.id === arg.id;
      });
      return item;
    },
    categories: () => categories,
    category: (parent, arg) => {
      let category = categories.find((category) => {
        return category.category_id === arg.category_id;
      });
      return category;
    },
    status: () => status,
    statu: (parent, arg) => {
      let statu = status.find((statu) => {
        return statu.status_id === arg.status_id;
      });
      return statu;
    },
  },
};
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`server running at ${url}`);
});
