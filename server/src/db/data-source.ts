import 'dotenv/config';
import 'reflect-metadata';

import { join } from 'node:path';
import { DataSource } from 'typeorm';

const isProduction = process.env.NODE_ENV === 'production';
const currentDir = import.meta.dirname;

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,

  entities: [join(currentDir, '../modules/**/*.entity.{js,ts}')],
  migrations: [join(currentDir, './migrations/*.{js,ts}')],

  synchronize: false,
  migrationsRun: false,
  logging: !isProduction,
});