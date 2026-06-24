import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType('Company')
export class CompanyType {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;
}