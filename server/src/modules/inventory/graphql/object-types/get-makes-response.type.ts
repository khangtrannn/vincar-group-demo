import { Field, ObjectType } from 'type-graphql';
import { MakeType } from './make.type.js';

@ObjectType('GetMakesResponse')
export class GetMakesResponseType {
  @Field(() => [MakeType])
  makes!: MakeType[];
}