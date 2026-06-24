import { buildSchema } from 'type-graphql';
import { HelloResolver } from '../../modules/health/hello.resolver.js';
import { registerInventoryEnums } from '../../modules/inventory/graphql/enums/register-inventory-enums.js';
import { MakeResolver } from '../../modules/inventory/graphql/resolvers/make.resolver.js';

export async function createGraphQLSchema() {
  registerInventoryEnums();

  return buildSchema({
    resolvers: [HelloResolver, MakeResolver],
    validate: true,
  });
}