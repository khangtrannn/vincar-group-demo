import { Field, ObjectType } from 'type-graphql';

import { PaginationInfoType } from './pagination-info.type.js';
import { VehicleType } from './vehicle.type.js';

@ObjectType('GetPublishedVPLVehiclesResponse')
export class GetPublishedVPLVehiclesResponseType {
  @Field(() => PaginationInfoType)
  paginationInfo!: PaginationInfoType;

  @Field(() => [VehicleType])
  vehicles!: VehicleType[];
}