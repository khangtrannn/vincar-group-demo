import { Column, Entity, JoinColumn, ManyToOne, OneToMany, Relation } from "typeorm";
import { AppBaseEntity } from "../../../common/entities/app-base.entity.js";
import { Company } from "../entities/company.entity.js";
import { Model } from "../entities/model.entity.js";
import { VehicleVariant } from "../entities/vehicle-variant.entity.js";
import { Color } from "../entities/color.entity.js";
import { VehicleInventoryStatus } from "./vehicle-inventory-status.enum.js";
import { VehicleCategory } from "./vehicle-category.enum.js";
import { VehicleImage } from "../entities/vehicle-image.entity.js";

@Entity({ name: 'vehicles' })
export class Vehicle extends AppBaseEntity {
  @Column({
    name: 'company_id',
    type: 'uuid',
  })
  companyId!: string;

  @ManyToOne(() => Company, (company) => company.vehicles, {
    nullable: false,
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'company_id' })
  company!: Relation<Company>;

  @Column({
    name: 'model_id',
    type: 'uuid',
  })
  modelId!: string;

  @ManyToOne(() => Model, (model) => model.vehicles, {
    nullable: false,
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'model_id' })
  model!: Relation<Model>;

  @Column({
    name: 'vehicle_variant_id',
    type: 'uuid',
    nullable: true,
  })
  vehicleVariantId!: string | null;

  @ManyToOne(() => VehicleVariant, (vehicleVariant) => vehicleVariant.vehicles, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'vehicle_variant_id' })
  vehicleVariant!: VehicleVariant | null;

  @Column({
    name: 'exterior_color_id',
    type: 'uuid',
    nullable: true,
  })
  exteriorColorId!: string | null;

  @ManyToOne(() => Color, (color) => color.exteriorVehicles, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'exterior_color_id' })
  exteriorColor!: Color | null;

  @Column({
    name: 'interior_color_id',
    type: 'uuid',
    nullable: true,
  })
  interiorColorId!: string | null;

  @ManyToOne(() => Color, (color) => color.interiorVehicles, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'interior_color_id' })
  interiorColor!: Color | null;

  @Column({
    name: 'vincar_id',
    type: 'varchar',
    length: 100,
    unique: true,
  })
  vincarId!: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  name!: string;

  @Column({
    name: 'is_used',
    type: 'boolean',
    default: false,
  })
  isUsed!: boolean;

  @Column({
    name: 'inventory_status',
    type: 'enum',
    enum: VehicleInventoryStatus,
    enumName: 'vehicle_inventory_status',
    default: VehicleInventoryStatus.AVAILABLE,
  })
  inventoryStatus!: VehicleInventoryStatus;

  @Column({
    type: 'enum',
    enum: VehicleCategory,
    enumName: 'vehicle_category',
    default: VehicleCategory.SALES,
  })
  category!: VehicleCategory;

  @Column({
    type: 'int',
    nullable: true,
  })
  price!: number | null;

  @Column({
    name: 'leasing_monthly_price',
    type: 'int',
    nullable: true,
  })
  leasingMonthlyPrice!: number | null;

  @Column({
    name: 'img_url',
    type: 'text',
    nullable: true,
  })
  imgUrl!: string | null;

  @Column({
    type: 'jsonb',
    nullable: true,
  })
  metadata!: Record<string, unknown> | null;

  @Column({
    name: 'used_car_metadata',
    type: 'jsonb',
    nullable: true,
  })
  usedCarMetadata!: Record<string, unknown> | null;

  @OneToMany(() => VehicleImage, vehicleImage => vehicleImage.vehicle)
  images!: Relation<VehicleImage[]>
}

