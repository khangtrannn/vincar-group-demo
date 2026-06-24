import { Field, ID, Int, ObjectType } from 'type-graphql';
import { GraphQLJSONObject } from 'graphql-scalars';

@ObjectType('Variant')
export class VehicleVariantType {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field(() => Int, { nullable: true })
  numOfSeat!: number | null;

  @Field(() => GraphQLJSONObject, { nullable: true })
  metadata!: Record<string, unknown> | null;
}