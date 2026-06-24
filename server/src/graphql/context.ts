import type { Request, Response } from 'express';
import { DataSource } from 'typeorm';

export type GraphQLContext = {
  req: Request;
  res: Response;
  dataSource: DataSource;
};