import { Field, ID, ObjectType } from 'type-graphql';

import { MakeType } from './make.type.js';
import { VehicleBodyType } from '../../enums/vehicle-body-type.enum.js';
import { VehicleFuelType } from '../../enums/vehicle-fuel-type.enum.js';

@ObjectType('Model')
export class ModelType {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field(() => VehicleBodyType, { nullable: true })
  bodyType!: VehicleBodyType | null;

  @Field(() => VehicleFuelType, { nullable: true })
  fuelType!: VehicleFuelType | null;

  @Field(() => MakeType)
  make!: MakeType;
}