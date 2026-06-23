import { Column, Entity, Index, OneToMany, Relation } from "typeorm";
import { AppBaseEntity } from "../../../common/entities/app-base.entity.js";
import { Vehicle } from "../enums/vehicle.entity.js";

@Entity({ name: 'companies' })
@Index('UQ_companies_name', ['name'], { unique: true })
export class Company extends AppBaseEntity {
  @Column({
    type: 'varchar',
    length: 255,
  })
  name!: string;

  @OneToMany(() => Vehicle, vehicle => vehicle.company)
  vehicles!: Relation<Vehicle[]>
}