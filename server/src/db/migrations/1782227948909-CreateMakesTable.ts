import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateMakesTable1782227948909 implements MigrationInterface {
    name = 'CreateMakesTable1782227948909'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "makes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying(255) NOT NULL, "metadata" jsonb, CONSTRAINT "UQ_d59cb129eb7b945050392c649c5" UNIQUE ("name"), CONSTRAINT "PK_daf82f2b6bffcb458f78c6bd964" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "makes"`);
    }

}
