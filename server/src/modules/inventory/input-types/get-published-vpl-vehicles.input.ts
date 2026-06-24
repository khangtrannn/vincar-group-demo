import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class GetPublishedVPLVehiclesInput {
  @Field(() => Int, {
    nullable: true,
    defaultValue: 1,
  })
  pageNumber?: number;

  @Field(() => Int, {
    nullable: true,
    defaultValue: 16,
  })
  pageSize?: number;
}