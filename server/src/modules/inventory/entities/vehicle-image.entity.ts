import { Column, Entity, JoinColumn, ManyToOne, Relation } from "typeorm";
import { AppBaseEntity } from "../../../common/entities/app-base.entity.js";
import { Vehicle } from "../enums/vehicle.entity.js";

@Entity({ name: 'vehicle_images' })
export class VehicleImage extends AppBaseEntity {
  @Column({
    name: 'vehicle_id',
    type: 'uuid',
  })
  vehicleId!: string;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.images, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'vehicle_id' })
  vehicle!: Relation<Vehicle>;

  @Column({
    type: 'text',
  })
  url!: string;

  @Column({
    name: 'sort_order',
    type: 'int',
    default: 0,
  })
  sortOrder!: number;

  @Column({
    name: 'is_primary',
    type: 'boolean',
    default: false,
  })
  isPrimary!: boolean;
}

