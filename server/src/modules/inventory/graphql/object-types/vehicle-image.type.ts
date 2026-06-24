import { Field, ID, Int, ObjectType } from 'type-graphql';

@ObjectType('VehicleImage')
export class VehicleImageType {
  @Field(() => ID)
  id!: string;

  @Field(() => ID)
  vehicleId!: string;

  @Field()
  url!: string;

  @Field(() => Int)
  sortOrder!: number;

  @Field()
  isPrimary!: boolean;
}