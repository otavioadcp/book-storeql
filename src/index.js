const { ApolloServer, gql } = require("apollo-server");
const users = require("./mocks/datas/users");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    phone: String!
    active: Boolean!
  }

  type Query {
    helloWorld: String!
    users: [User!]!
  }
`;
const resolvers = {
  Query: {
    helloWorld: () => "Hello World! First query done!",
    users: () => users,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`Running at ${url}`));
