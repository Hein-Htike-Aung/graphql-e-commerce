const { ApolloServer } = require('apollo-server');
const { db } = require('./db');
const { Category } = require('./resolvers/Category');
const { Mutation } = require('./resolvers/Mutation');
const { Product } = require('./resolvers/Product');
const { Query } = require('./resolvers/Query');
const { Review } = require('./resolvers/Review');
const { typeDefs } = require('./schema');

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Mutation,
    Product,
    Category,
    Review,
  },
  context: {
    db,
  },
});

server.listen().then(({ url }) => {
  console.log('Server is running at ' + url);
});
