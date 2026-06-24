import { Field, Int, ObjectType } from "type-graphql";

@ObjectType('PaginationInfoResponseTypeV2')
export class PaginationInfoType {
  @Field(() => Int)
  currentPageNumber!: number;

  @Field(() => Int)
  currentPageSize!: number;

  @Field()
  hasNextPage!: boolean;

  @Field(() => Int)
  totalPageNumber!: number;
}