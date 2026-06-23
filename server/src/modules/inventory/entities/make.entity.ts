import { Column, Entity } from "typeorm";
import { AppBaseEntity } from "../../../common/entities/app-base.entity.js";

@Entity({ name: 'makes' })
export class Make extends AppBaseEntity {
  @Column({ type: 'varchar', length: 255, unique: true })
  name!: string;

  @Column({ type: 'jsonb', nullable: true })
  metadata!: Record<string, unknown> | null;
}