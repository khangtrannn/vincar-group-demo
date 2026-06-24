import { Ctx, Query, Resolver } from "type-graphql";
import { MakeType } from "../object-types/make.type.js";
import { GraphQLContext } from "../../../../common/graphql/context.js";
import { MakeService } from "../../services/make.service.js";
import { GetMakesResponseType } from "../object-types/get-makes-response.type.js";

@Resolver()
export class MakeResolver {
  @Query(() => GetMakesResponseType)
  async getMakes(@Ctx() { dataSource }: GraphQLContext) {
    const makeService = new MakeService(dataSource);
    const makes = await makeService.getMakes();

    return {
      makes,
    }
  }
}