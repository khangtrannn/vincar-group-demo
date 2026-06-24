import { DataSource } from 'typeorm';

import { Company } from '../entities/company.entity.js';
import { companySeedData } from './data/company.seed-data.js';

export async function seedCompanies(dataSource: DataSource) {
  const companyRepository = dataSource.getRepository(Company);

  await companyRepository.upsert(
    companySeedData.map((company) => ({
      id: company.id,
      name: company.name,
      createdAt: company.createdAt,
      updatedAt: company.updatedAt,
    })),
    {
      conflictPaths: ['id'],
      skipUpdateIfNoValuesChanged: true,
    },
  );

  const count = await companyRepository.count();

  console.log(`Seeded companies. Total companies: ${count}`);
}