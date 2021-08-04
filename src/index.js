const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    helloWorld: String!
  }
`;
const resolvers = {
  Query: {
    helloWorld: () => "Hello World! First query done!",
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => console.log(`Running at ${url}`));
