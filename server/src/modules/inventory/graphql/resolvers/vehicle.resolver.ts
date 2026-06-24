import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { GetPublishedVPLVehiclesResponseType } from "../object-types/get-published-vpl-vehicles-response.type.ts.js";
import { GraphQLContext } from "../../../../common/graphql/context.js";
import { GetPublishedVPLVehiclesInput } from "../../input-types/get-published-vpl-vehicles.input.js";
import { VehicleService } from "../../services/vehicle.service.js";

@Resolver()
export class VehicleResolver {
  @Query(() => GetPublishedVPLVehiclesResponseType)
  async getPublishedVPLVehicles(
    @Ctx() ctx: GraphQLContext,
    @Arg('input', () => GetPublishedVPLVehiclesInput, {
      nullable: true,
    })
    input?: GetPublishedVPLVehiclesInput,
  ): Promise<GetPublishedVPLVehiclesResponseType> {
    const vehicleService = new VehicleService(ctx.dataSource);

    return vehicleService.getPublishedVPLVehicles({
      pageNumber: input?.pageNumber,
      pageSize: input?.pageSize,
    });
  }
}

