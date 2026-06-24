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

  @Field(() => ID)
  companyId!: string;

  @Field(() => CompanyType)
  company!: CompanyType;

  @Field(() => ID)
  modelId!: string;

  @Field(() => ModelType)
  model!: ModelType;

  @Field(() => ID, { nullable: true })
  vehicleVariantId!: string | null;

  @Field(() => VehicleVariantType, { nullable: true })
  vehicleVariant!: VehicleVariantType | null;

  @Field(() => ID, { nullable: true })
  exteriorColorId!: string | null;

  @Field(() => ColorType, { nullable: true })
  exteriorColor!: ColorType | null;

  @Field(() => ID, { nullable: true })
  interiorColorId!: string | null;

  @Field(() => ColorType, { nullable: true })
  interiorColor!: ColorType | null;

  @Field(() => String)
  vincarId!: string;

  @Field(() => String)
  name!: string;

  @Field(() => Boolean)
  isUsed!: boolean;

  @Field(() => VehicleInventoryStatus)
  inventoryStatus!: VehicleInventoryStatus;

  @Field(() => VehicleCategory)
  category!: VehicleCategory;

  @Field(() => Int, { nullable: true })
  price!: number | null;

  @Field(() => Int, { nullable: true })
  leasingMonthlyPrice!: number | null;

  @Field(() => String, { nullable: true })
  imgUrl!: string | null;

  @Field(() => GraphQLJSONObject, { nullable: true })
  metadata!: Record<string, unknown> | null;

  @Field(() => GraphQLJSONObject, { nullable: true })
  usedCarMetadata!: Record<string, unknown> | null;

  @Field(() => [VehicleImageType])
  images!: VehicleImageType[];

  @Field(() => Date)
  createdAt!: Date;

  @Field(() => Date)
  updatedAt!: Date;
}


