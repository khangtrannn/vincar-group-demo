import { DataSource } from 'typeorm';

import { Color } from '../entities/color.entity.js';
import { colorSeedData } from './data/color.seed-data.js';

export async function seedColors(dataSource: DataSource) {
  const colorRepository = dataSource.getRepository(Color);

  await colorRepository.upsert(
    colorSeedData.map((color) => ({
      id: color.id,
      name: color.name,
      simpleName: color.simpleName,
    })),
    {
      conflictPaths: ['id'],
      skipUpdateIfNoValuesChanged: true,
    },
  );

  const count = await colorRepository.count();

  console.log(`Seeded colors. Total colors: ${count}`);
}