import { DataSource } from 'typeorm';

import { Model } from '../entities/model.entity.js';
import { modelSeedData } from './data/model.seed-data.js';

export async function seedModels(dataSource: DataSource) {
  const modelRepository = dataSource.getRepository(Model);

  await modelRepository.upsert(
    modelSeedData.map((model) => ({
      id: model.id,
      makeId: model.makeId,
      name: model.name,
      bodyType: model.bodyType,
      fuelType: model.fuelType,
      createdAt: model.createdAt,
      updatedAt: model.updatedAt,
    })),
    {
      conflictPaths: ['id'],
      skipUpdateIfNoValuesChanged: true,
    },
  );

  const count = await modelRepository.count();

  console.log(`Seeded models. Total models: ${count}`);
}