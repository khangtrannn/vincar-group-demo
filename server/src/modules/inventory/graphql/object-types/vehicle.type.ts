import { Field, ID, Int, ObjectType } from 'type-graphql';
import { GraphQLJSONObject } from 'graphql-scalars';

import { VehicleCategory } from '../../enums/vehicle-category.enum.js';
import { VehicleInventoryStatus } from '../../enums/vehicle-inventory-status.enum.js';
import { ColorType } from './color.type.js';
import { CompanyType } from './company.type.js';
import { ModelType } from './model.type.js';
import { VehicleImageType } from './vehicle-image.type.js';
import { VehicleVariantType } from './vehicle-variant.type.js';

@ObjectType('VPLVehicle')
export class VehicleType {
  @Field(() => ID)
  id!: string;

  @Field()
  vincarId!: string;

  @Field()
  name!: string;

  @Field()
  isUsed!: boolean;

  @Field(() => VehicleInventoryStatus)
  inventoryStatus!: VehicleInventoryStatus;

  @Field(() => VehicleCategory)
  category!: VehicleCategory;

  @Field(() => Int, { nullable: true })
  price!: number | null;

  @Field(() => Int, { nullable: true })
  leasingMonthlyPrice!: number | null;

  @Field({ nullable: true })
  imgUrl!: string | null;

  @Field(() => CompanyType)
  company!: CompanyType;

  @Field(() => ModelType)
  model!: ModelType;

  @Field(() => VehicleVariantType, { nullable: true })
  vehicleVariant!: VehicleVariantType | null;

  @Field(() => ColorType, { nullable: true })
  exteriorColor!: ColorType | null;

  @Field(() => ColorType, { nullable: true })
  interiorColor!: ColorType | null;

  @Field(() => GraphQLJSONObject, { nullable: true })
  metadata!: Record<string, unknown> | null;

  @Field(() => GraphQLJSONObject, { nullable: true })
  usedCarMetadata!: Record<string, unknown> | null;

  @Field(() => [VehicleImageType], { nullable: true })
  images?: VehicleImageType[];
}