import { DataSource } from 'typeorm';

import { Make } from '../entities/make.entity.js';

export class MakeService {
  constructor(private readonly dataSource: DataSource) {}

  async getMakes(): Promise<Make[]> {
    return this.dataSource.getRepository(Make).find({
      order: {
        name: 'ASC',
      },
    });
  }
}