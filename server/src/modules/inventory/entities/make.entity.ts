import { Column, Entity, OneToMany, Relation } from "typeorm";
import { AppBaseEntity } from "../../../common/entities/app-base.entity.js";
import { Model } from "./model.entity.js";

@Entity({ name: 'makes' })
export class Make extends AppBaseEntity {
  @Column({ type: 'varchar', length: 255, unique: true })
  name!: string;

  @Column({ type: 'jsonb', nullable: true })
  metadata!: Record<string, unknown> | null;

  @OneToMany(() => Model, (model) => model.make)
  models!: Relation<Model[]>;
}