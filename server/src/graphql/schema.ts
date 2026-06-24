import { buildSchema } from 'type-graphql';
import { HelloResolver } from '../modules/health/hello.resolver.js';

export async function createGraphQLSchema() {
  return buildSchema({
    resolvers: [HelloResolver],
    validate: true,
  });
}