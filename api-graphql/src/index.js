// src/index.js

import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import typeDefs from './schema'
import resolvers from './resolvers'
import models from '../models'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models }
})

const port = process.env.PORT || 4000;

const app = express();

server.applyMiddleware({ app });

// Run server
app.listen({ port }, () => {
  console.log(`🚀Server ready at http://localhost:${ port }${ server.graphqlPath }`);
});
