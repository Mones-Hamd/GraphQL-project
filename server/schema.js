import { ApolloServer, gql } from 'apollo-server';
const typeDefs = gql`
  type ItemList {
    id: Int!
    name: String!
    price: Float!
    description: String!
    status: Status
    img: String!
    rate: Float!
    category: Categories
  }
  type Categories {
    category_id: Int
    title: String
    itemList: [ItemList!]
  }
  type Status {
    status_id: Int
    title: String
    itemList: [ItemList!]
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
export default typeDefs;
