import { Field, ID, ObjectType } from 'type-graphql';
import { GraphQLJSONObject } from 'graphql-scalars';

@ObjectType('Make')
export class MakeType {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field(() => GraphQLJSONObject, { nullable: true })
  metadata!: Record<string, unknown> | null;
}