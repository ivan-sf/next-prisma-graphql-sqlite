import { ApolloServer } from 'apollo-server';
import typeDefs from './src/gpl/schema';
import resolvers from './src/gpl/resolvers';

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Servidor de Apollo ejecutándose en ${url}`);
});
