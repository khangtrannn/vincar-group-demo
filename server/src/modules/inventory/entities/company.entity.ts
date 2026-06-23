import { Column, Entity, Index } from "typeorm";
import { AppBaseEntity } from "../../../common/entities/app-base.entity";

@Entity({ name: 'companies' })
@Index('UQ_companies_name', ['name'], { unique: true })
export class Company extends AppBaseEntity {
  @Column({
    type: 'varchar',
    length: 255,
  })
  name!: string;
}