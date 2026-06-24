import { DataSource } from 'typeorm';

import { Vehicle } from '../entities/vehicle.entity.js';
import { vehicleSeedData } from './data/vehicle.seed-data.js';

export async function seedVehicles(dataSource: DataSource) {
  const vehicleRepository = dataSource.getRepository(Vehicle);

  const vehicles = vehicleRepository.create(
    vehicleSeedData.map((vehicle) => ({
      id: vehicle.id,
      companyId: vehicle.companyId,
      modelId: vehicle.modelId,
      vehicleVariantId: vehicle.vehicleVariantId,
      exteriorColorId: vehicle.exteriorColorId,
      interiorColorId: vehicle.interiorColorId,
      vincarId: vehicle.vincarId,
      name: vehicle.name,
      isUsed: vehicle.isUsed,
      inventoryStatus: vehicle.inventoryStatus,
      category: vehicle.category,
      price: vehicle.price,
      leasingMonthlyPrice: vehicle.leasingMonthlyPrice,
      imgUrl: vehicle.imgUrl,
      metadata: vehicle.metadata,
      usedCarMetadata: vehicle.usedCarMetadata,
      createdAt: vehicle.createdAt,
      updatedAt: vehicle.updatedAt,
    })),
  );

  await vehicleRepository.save(vehicles, {
    chunk: 50,
  });

  const count = await vehicleRepository.count();

  console.log(`Seeded vehicles. Total vehicles: ${count}`);
}