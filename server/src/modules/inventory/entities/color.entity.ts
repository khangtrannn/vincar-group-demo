import { Column, Entity, OneToMany, Relation } from "typeorm";
import { AppBaseEntity } from "../../../common/entities/app-base.entity.js";
import { Vehicle } from "../enums/vehicle.entity.js";
import { VehicleVariant } from "./vehicle-variant.entity.js";

@Entity({ name: 'colors' })
export class Color extends AppBaseEntity {
  @Column({
    type: 'varchar',
    length: 255,
  })
  name!: string;

  @Column({
    name: 'simple_name',
    type: 'varchar',
    length: 255,
  })
  simpleName!: string;

  @OneToMany(() => Vehicle, vehicle => vehicle.exteriorColor)
  exteriorVehicles!: Relation<Vehicle[]>

  @OneToMany(() => Vehicle, vehicle => vehicle.exteriorColor)
  interiorVehicles!: Relation<Vehicle[]>;
}