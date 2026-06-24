import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, Relation } from "typeorm";
import { AppBaseEntity } from "../../../common/entities/app-base.entity.js";
import { Make } from "./make.entity.js";
import { VehicleVariant } from "./vehicle-variant.entity.js";
import { Vehicle } from "./vehicle.entity.js";
import { VehicleBodyType } from "../enums/vehicle-body-type.enum.js";
import { VehicleFuelType } from "../enums/vehicle-fuel-type.enum.js";

@Entity({ name: 'models' })
@Index(['makeId', 'name'], { unique: true })
export class Model extends AppBaseEntity {
  @Column({
    name: 'make_id',
    type: 'uuid',
  })
  makeId!: string;

  @ManyToOne(() => Make, (make) => make.models, {
    nullable: false,
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'make_id' })
  make!: Relation<Make>;

  @Column({
    type: 'varchar',
    length: 255,
  })
  name!: string;

  @Column({
    name: 'body_type',
    type: 'enum',
    enum: VehicleBodyType,
    enumName: 'vehicle_body_type',
    nullable: true,
  })
  bodyType!: VehicleBodyType | null;

  @Column({
    name: 'fuel_type',
    type: 'enum',
    enum: VehicleFuelType,
    enumName: 'vehicle_fuel_type',
    nullable: true,
  })
  fuelType!: VehicleFuelType | null;

  @OneToMany(() => VehicleVariant, vehicleVariant => vehicleVariant.model)
  vehicleVariants!: Relation<VehicleVariant[]>;

  @OneToMany(() => Vehicle, vehicle => vehicle.model)
  vehicles!: Relation<Vehicle[]>;
}