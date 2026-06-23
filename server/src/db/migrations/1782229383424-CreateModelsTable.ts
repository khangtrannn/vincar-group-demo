import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateModelsTable1782229383424 implements MigrationInterface {
    name = 'CreateModelsTable1782229383424'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."vehicle_body_type" AS ENUM('SEDAN', 'SUV', 'MPV', 'HATCHBACK', 'COUPE', 'CONVERTIBLE', 'VAN', 'WAGON', 'PICKUP')`);
        await queryRunner.query(`CREATE TYPE "public"."vehicle_fuel_type" AS ENUM('PETROL', 'DIESEL', 'HYBRID', 'ELECTRIC', 'PLUG_IN_HYBRID')`);
        await queryRunner.query(`CREATE TABLE "models" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "make_id" uuid NOT NULL, "name" character varying(255) NOT NULL, "body_type" "public"."vehicle_body_type", "fuel_type" "public"."vehicle_fuel_type", CONSTRAINT "PK_ef9ed7160ea69013636466bf2d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_0bf1cd566eddf891d6e3175cb2" ON "models"  ("make_id", "name") `);
        await queryRunner.query(`ALTER TABLE "models" ADD CONSTRAINT "FK_d5ec5d397dc2d36135f61c16652" FOREIGN KEY ("make_id") REFERENCES "makes"("id") ON DELETE RESTRICT ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "models" DROP CONSTRAINT "FK_d5ec5d397dc2d36135f61c16652"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0bf1cd566eddf891d6e3175cb2"`);
        await queryRunner.query(`DROP TABLE "models"`);
        await queryRunner.query(`DROP TYPE "public"."vehicle_fuel_type"`);
        await queryRunner.query(`DROP TYPE "public"."vehicle_body_type"`);
    }

}
