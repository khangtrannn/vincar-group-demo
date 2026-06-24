import 'reflect-metadata';
import 'dotenv/config';

import { AppDataSource } from './data-source.js';
import { seedMakes } from '../modules/inventory/seeds/seed-makes.js';
import { seedCompanies } from '../modules/inventory/seeds/seed-companies.js';
import { seedModels } from '../modules/inventory/seeds/seed-models.js';
import { seedColors } from '../modules/inventory/seeds/seed-colors.js';
import { seedVehicleVariants } from '../modules/inventory/seeds/seed-vehicle-variants.js';
import { seedVehicles } from '../modules/inventory/seeds/seed-vehicles.js';
import { seedVehicleMetadata } from '../modules/inventory/seeds/seed-vehicle-metadata.js';
import { seedVehicleImages } from '../modules/inventory/seeds/seed-vehicle-images.js';

async function main() {
  try {
    await AppDataSource.initialize();
    console.log('Database connected');

    await seedMakes(AppDataSource);
    await seedCompanies(AppDataSource);
    await seedModels(AppDataSource);
    await seedColors(AppDataSource);
    await seedVehicleVariants(AppDataSource);
    await seedVehicles(AppDataSource);
    await seedVehicleMetadata(AppDataSource);
    await seedVehicleImages(AppDataSource);

    console.log('Seed completed');
    process.exit(0);
  } catch (error) {
    console.error('Seed failed', error);
    process.exit(1);
  } finally {
    if (AppDataSource.isInitialized) {
      await AppDataSource.destroy();
    }
  }
}

void main();