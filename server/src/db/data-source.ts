import 'dotenv/config';
import { join } from 'node:path';
import { config } from 'dotenv';
import { DataSource } from 'typeorm'
import { Company } from '../modules/inventory/entities/company.entity';

config();

const isProduction = process.env.NODE_ENV === 'production'
const databaseUrl = process.env.DATABASE_URL;

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: databaseUrl,

  entities: [Company],
  migrations: ['dist/migrations/*.js'],

  synchronize: false,
  logging: !isProduction,
})