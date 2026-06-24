import { MigrationInterface, QueryRunner } from "typeorm";

export class AddVincarSeedEnumValues1782284337246 implements MigrationInterface {
    name = 'AddVincarSeedEnumValues1782284337246'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."vehicle_inventory_status" RENAME TO "vehicle_inventory_status_old"`);
        await queryRunner.query(`CREATE TYPE "public"."vehicle_inventory_status" AS ENUM('AVAILABLE', 'DELIVERED')`);
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "inventory_status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "inventory_status" TYPE "public"."vehicle_inventory_status" USING "inventory_status"::"text"::"public"."vehicle_inventory_status"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "inventory_status" SET DEFAULT 'AVAILABLE'`);
        await queryRunner.query(`DROP TYPE "public"."vehicle_inventory_status_old"`);
        await queryRunner.query(`ALTER TYPE "public"."vehicle_body_type" RENAME TO "vehicle_body_type_old"`);
        await queryRunner.query(`CREATE TYPE "public"."vehicle_body_type" AS ENUM('CONVERTIBLE', 'COUPE', 'HATCHBACK', 'LUXURY_SEDAN', 'MPV', 'SEDAN', 'SPORTS', 'STATION_WAGON', 'SUV', 'TRUCK', 'VAN')`);
        await queryRunner.query(`ALTER TABLE "models" ALTER COLUMN "body_type" TYPE "public"."vehicle_body_type" USING "body_type"::"text"::"public"."vehicle_body_type"`);
        await queryRunner.query(`DROP TYPE "public"."vehicle_body_type_old"`);
        await queryRunner.query(`ALTER TYPE "public"."vehicle_fuel_type" RENAME TO "vehicle_fuel_type_old"`);
        await queryRunner.query(`CREATE TYPE "public"."vehicle_fuel_type" AS ENUM('DIESEL', 'ELECTRIC', 'HYBRID', 'PETROL')`);
        await queryRunner.query(`ALTER TABLE "models" ALTER COLUMN "fuel_type" TYPE "public"."vehicle_fuel_type" USING "fuel_type"::"text"::"public"."vehicle_fuel_type"`);
        await queryRunner.query(`DROP TYPE "public"."vehicle_fuel_type_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."vehicle_fuel_type_old" AS ENUM('PETROL', 'DIESEL', 'HYBRID', 'ELECTRIC', 'PLUG_IN_HYBRID')`);
        await queryRunner.query(`ALTER TABLE "models" ALTER COLUMN "fuel_type" TYPE "public"."vehicle_fuel_type_old" USING "fuel_type"::"text"::"public"."vehicle_fuel_type_old"`);
        await queryRunner.query(`DROP TYPE "public"."vehicle_fuel_type"`);
        await queryRunner.query(`ALTER TYPE "public"."vehicle_fuel_type_old" RENAME TO "vehicle_fuel_type"`);
        await queryRunner.query(`CREATE TYPE "public"."vehicle_body_type_old" AS ENUM('SEDAN', 'SUV', 'MPV', 'HATCHBACK', 'COUPE', 'CONVERTIBLE', 'VAN', 'WAGON', 'PICKUP')`);
        await queryRunner.query(`ALTER TABLE "models" ALTER COLUMN "body_type" TYPE "public"."vehicle_body_type_old" USING "body_type"::"text"::"public"."vehicle_body_type_old"`);
        await queryRunner.query(`DROP TYPE "public"."vehicle_body_type"`);
        await queryRunner.query(`ALTER TYPE "public"."vehicle_body_type_old" RENAME TO "vehicle_body_type"`);
        await queryRunner.query(`CREATE TYPE "public"."vehicle_inventory_status_old" AS ENUM('AVAILABLE', 'RESERVED', 'SOLD', 'UNAVAILABLE')`);
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "inventory_status" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "inventory_status" TYPE "public"."vehicle_inventory_status_old" USING "inventory_status"::"text"::"public"."vehicle_inventory_status_old"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ALTER COLUMN "inventory_status" SET DEFAULT 'AVAILABLE'`);
        await queryRunner.query(`DROP TYPE "public"."vehicle_inventory_status"`);
        await queryRunner.query(`ALTER TYPE "public"."vehicle_inventory_status_old" RENAME TO "vehicle_inventory_status"`);
    }

}
