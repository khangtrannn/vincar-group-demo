import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateVehicleImagesTable1782232435371 implements MigrationInterface {
    name = 'CreateVehicleImagesTable1782232435371'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vehicle_images" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "vehicle_id" uuid NOT NULL, "url" text NOT NULL, "sort_order" integer NOT NULL DEFAULT '0', "is_primary" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_62a037bce2dae7af30fc41cc984" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "vehicle_images" ADD CONSTRAINT "FK_0fcb9e0a442f0789daf320ccc1f" FOREIGN KEY ("vehicle_id") REFERENCES "vehicles"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicle_images" DROP CONSTRAINT "FK_0fcb9e0a442f0789daf320ccc1f"`);
        await queryRunner.query(`DROP TABLE "vehicle_images"`);
    }

}
