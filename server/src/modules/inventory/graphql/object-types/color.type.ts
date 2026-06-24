import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType('Colors')
export class ColorType {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field()
  simpleName!: string;
}