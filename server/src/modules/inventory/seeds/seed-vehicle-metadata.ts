import { DataSource } from 'typeorm';

import { Vehicle } from '../entities/vehicle.entity.js';
import { vehicleMetadataSeedData } from './data/vehicle-metadata.seed-data.js';

export async function seedVehicleMetadata(dataSource: DataSource) {
  await dataSource.transaction(async (manager) => {
    for (const item of vehicleMetadataSeedData) {
      const vehicle = await manager.findOneBy(Vehicle, {
        id: item.vehicleId,
      });

      if (!vehicle) {
        throw new Error(
          `Vehicle not found while seeding metadata: ${item.vehicleId}`,
        );
      }

      vehicle.metadata = item.metadata;
      vehicle.usedCarMetadata = item.usedCarMetadata;

      await manager.save(Vehicle, vehicle);
    }
  });

  console.log(
    `Seeded vehicle metadata. Total vehicle metadata: ${vehicleMetadataSeedData.length}`,
  );
}