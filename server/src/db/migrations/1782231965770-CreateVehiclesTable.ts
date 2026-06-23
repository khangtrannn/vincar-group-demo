import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateVehiclesTable1782231965770 implements MigrationInterface {
    name = 'CreateVehiclesTable1782231965770'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vehicle_variants" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "model_id" uuid NOT NULL, "name" character varying(255) NOT NULL, "num_of_seat" integer, "metadata" jsonb, CONSTRAINT "PK_d25c02997e12d1d5e8685804e82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."vehicle_inventory_status" AS ENUM('AVAILABLE', 'RESERVED', 'SOLD', 'UNAVAILABLE')`);
        await queryRunner.query(`CREATE TYPE "public"."vehicle_category" AS ENUM('SALES', 'LEASING')`);
        await queryRunner.query(`CREATE TABLE "vehicles" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "company_id" uuid NOT NULL, "model_id" uuid NOT NULL, "vehicle_variant_id" uuid, "exterior_color_id" uuid, "interior_color_id" uuid, "vincar_id" character varying(100) NOT NULL, "name" character varying(255) NOT NULL, "is_used" boolean NOT NULL DEFAULT false, "inventory_status" "public"."vehicle_inventory_status" NOT NULL DEFAULT 'AVAILABLE', "category" "public"."vehicle_category" NOT NULL DEFAULT 'SALES', "price" integer, "leasing_monthly_price" integer, "img_url" text, "metadata" jsonb, "used_car_metadata" jsonb, CONSTRAINT "UQ_4dc3ffe7e0865ea6f6fc590b240" UNIQUE ("vincar_id"), CONSTRAINT "PK_18d8646b59304dce4af3a9e35b6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "vehicle_variants" ADD CONSTRAINT "FK_ba8b9be09a299840c68ead3d9de" FOREIGN KEY ("model_id") REFERENCES "models"("id") ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD CONSTRAINT "FK_e11ef2dcd880132d31bd9f92c2a" FOREIGN KEY ("company_id") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD CONSTRAINT "FK_c4fe98a2147b08df1ab56df5313" FOREIGN KEY ("model_id") REFERENCES "models"("id") ON DELETE RESTRICT ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD CONSTRAINT "FK_5d8bfcc5c224b49d69b60db8e72" FOREIGN KEY ("vehicle_variant_id") REFERENCES "vehicle_variants"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD CONSTRAINT "FK_c13a9b2cc0e534d969046e9d864" FOREIGN KEY ("exterior_color_id") REFERENCES "colors"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD CONSTRAINT "FK_1d5bb775a2555587fd93a488af2" FOREIGN KEY ("interior_color_id") REFERENCES "colors"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" DROP CONSTRAINT "FK_1d5bb775a2555587fd93a488af2"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP CONSTRAINT "FK_c13a9b2cc0e534d969046e9d864"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP CONSTRAINT "FK_5d8bfcc5c224b49d69b60db8e72"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP CONSTRAINT "FK_c4fe98a2147b08df1ab56df5313"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP CONSTRAINT "FK_e11ef2dcd880132d31bd9f92c2a"`);
        await queryRunner.query(`ALTER TABLE "vehicle_variants" DROP CONSTRAINT "FK_ba8b9be09a299840c68ead3d9de"`);
        await queryRunner.query(`DROP TABLE "vehicles"`);
        await queryRunner.query(`DROP TYPE "public"."vehicle_category"`);
        await queryRunner.query(`DROP TYPE "public"."vehicle_inventory_status"`);
        await queryRunner.query(`DROP TABLE "vehicle_variants"`);
    }

}
