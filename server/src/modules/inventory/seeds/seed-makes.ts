import { DataSource } from 'typeorm';
import { Make } from '../entities/make.entity.js';
import { makeSeedData } from './data/make.seed-data.js';

export async function seedMakes(dataSource: DataSource) {
  const makeRepository = dataSource.getRepository(Make);

  const makes = makeRepository.create(
    makeSeedData.map((make) => ({
      id: make.id,
      name: make.name,
      metadata: make.metadata,
      createdAt: make.createdAt,
      updatedAt: make.updatedAt,
    })),
  );

  await makeRepository.save(makes, {
    chunk: 100,
  });

  const count = await makeRepository.count();

  console.log(`Seeded makes. Total makes: ${count}`);
}