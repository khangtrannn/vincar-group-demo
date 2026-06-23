import 'dotenv/config';
import 'reflect-metadata';

import { join } from 'node:path';
import { DataSource } from 'typeorm';

const isProduction = process.env.NODE_ENV === 'production';

const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,

  entities: [join(__dirname, '../modules/**/*.entity{.js,.ts}')],
  migrations: [join(__dirname, './migrations/*{.js,.ts}')],

  synchronize: false,
  migrationsRun: false,
  logging: !isProduction,
});

export default AppDataSource;