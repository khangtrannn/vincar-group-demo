import { Column, Entity, JoinColumn, ManyToOne, OneToMany, Relation } from "typeorm";
import { AppBaseEntity } from "../../../common/entities/app-base.entity.js";
import { Model } from "./model.entity.js";
import { Vehicle } from "../enums/vehicle.entity.js";

@Entity({ name: 'vehicle_variants' })
export class VehicleVariant extends AppBaseEntity {
  @Column({
    name: 'model_id',
    type: 'uuid',
  })
  modelId!: string;

  @ManyToOne(() => Model, (model) => model.vehicleVariants, {
    nullable: false,
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'model_id' })
  model!: Relation<Model>;

  @Column({
    type: 'varchar',
    length: 255,
  })
  name!: string;

  @Column({
    name: 'num_of_seat',
    type: 'int',
    nullable: true,
  })
  numOfSeat!: number | null;

  @Column({
    type: 'jsonb',
    nullable: true,
  })
  metadata!: Record<string, unknown> | null;

  @OneToMany(() => Vehicle, vehicle => vehicle.vehicleVariant)
  vehicles!: Relation<Vehicle[]>;
}
