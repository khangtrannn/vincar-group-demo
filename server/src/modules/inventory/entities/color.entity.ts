import { Column, Entity } from "typeorm";
import { AppBaseEntity } from "../../../common/entities/app-base.entity.js";

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
}