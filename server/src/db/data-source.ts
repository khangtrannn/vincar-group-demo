import { DataSource } from 'typeorm'

const isProduction = process.env.NODE_ENV === 'production'

export const AppDataSource = new DataSource({
  type: 'postgres',

  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),

  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,

  entities: [],
  migrations: [],

  synchronize: false,
  logging: !isProduction,
})