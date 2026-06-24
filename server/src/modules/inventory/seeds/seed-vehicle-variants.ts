import { DataSource } from 'typeorm';

import { VehicleVariant } from '../entities/vehicle-variant.entity.js';
import { vehicleVariantSeedData } from './data/vehicle-variant.seed-data.js';

export async function seedVehicleVariants(dataSource: DataSource) {
  const vehicleVariantRepository = dataSource.getRepository(VehicleVariant);

  const vehicleVariants = vehicleVariantRepository.create(
    vehicleVariantSeedData.map((variant) => ({
      id: variant.id,
      modelId: variant.modelId,
      name: variant.name,
      numOfSeat: variant.numOfSeat,
      metadata: variant.metadata,
      createdAt: variant.createdAt,
      updatedAt: variant.updatedAt,
    })),
  );

  await vehicleVariantRepository.save(vehicleVariants);

  const count = await vehicleVariantRepository.count();

  console.log(`Seeded vehicle variants. Total vehicle variants: ${count}`);
}