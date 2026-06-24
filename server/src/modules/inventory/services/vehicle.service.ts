import { DataSource, In } from "typeorm";
import { Vehicle } from "../entities/vehicle.entity.js";

export type GetPublishedVPLVehicleParams = {
  pageNumber?: number;
  pageSize?: number;
}

export type GetPublishedVPLVehiclesResult = {
  vehicles: Vehicle[];
  paginationInfo: {
    currentPageNumber: number;
    currentPageSize: number;
    hasNextPage: boolean;
    totalPageNumber: number;
  }
}

const DEFAULT_PAGE_NUMBER = 1;
const DEFAULT_PAGE_SIZE = 16;
const MAX_PAGE_SIZE = 50;

function normalizePageNumber(pageNumber?: number): number {
  if (!pageNumber || pageNumber < 1) {
    return DEFAULT_PAGE_NUMBER;
  }

  return pageNumber;
}

function normalizePageSize(pageSize?: number): number {
  if (!pageSize || pageSize < 1) {
    return DEFAULT_PAGE_SIZE;
  }

  return Math.min(pageSize, MAX_PAGE_SIZE);
}

export class VehicleService {
  constructor(private readonly dataSource: DataSource) {}

  async getPublishedVPLVehicles(
    params: GetPublishedVPLVehicleParams,
  ): Promise<GetPublishedVPLVehiclesResult> {
    const vehicleRepository = this.dataSource.getRepository(Vehicle);

    const pageNumber = normalizePageNumber(params.pageNumber);
    const pageSize = normalizePageSize(params.pageSize);
    const skip = (pageNumber - 1) * pageSize;

    const baseQuery = vehicleRepository
      .createQueryBuilder('vehicle')
      .orderBy('vehicle.createdAt', 'DESC')
      .addOrderBy('vehicle.id', 'DESC');

    const totalCount = await baseQuery.getCount();

    const vehicleIdRows = await baseQuery
      .clone()
      .select('vehicle.id', 'id')
      .skip(skip)
      .take(pageSize)
      .getRawMany<{ id: string }>();

    const vehicleIds = vehicleIdRows.map((row) => row.id);

    if (vehicleIds.length === 0) {
      return {
        vehicles: [],
        paginationInfo: {
          currentPageNumber: pageNumber,
          currentPageSize: pageSize,
          hasNextPage: false,
          totalPageNumber: Math.ceil(totalCount / pageSize),
        },
      };
    }

    const vehicles = await vehicleRepository
      .createQueryBuilder('vehicle')
      .leftJoinAndSelect('vehicle.company', 'company')
      .leftJoinAndSelect('vehicle.model', 'model')
      .leftJoinAndSelect('model.make', 'make')
      .leftJoinAndSelect('vehicle.vehicleVariant', 'vehicleVariant')
      .leftJoinAndSelect('vehicle.exteriorColor', 'exteriorColor')
      .leftJoinAndSelect('vehicle.interiorColor', 'interiorColor')
      .leftJoinAndSelect('vehicle.images', 'images')
      .where({
        id: In(vehicleIds),
      })
      .orderBy('vehicle.createdAt', 'DESC')
      .addOrderBy('vehicle.id', 'DESC')
      .addOrderBy('images.sortOrder', 'ASC')
      .getMany();

    const vehicleById = new Map(
      vehicles.map((vehicle) => [vehicle.id, vehicle]),
    );

    const orderedVehicles = vehicleIds
      .map((vehicleId) => vehicleById.get(vehicleId))
      .filter((vehicle): vehicle is Vehicle => Boolean(vehicle));

    const totalPageNumber = Math.ceil(totalCount / pageSize);

    return {
      vehicles: orderedVehicles,
      paginationInfo: {
        currentPageNumber: pageNumber,
        currentPageSize: pageSize,
        hasNextPage: pageNumber < totalPageNumber,
        totalPageNumber,
      },
    };
  }
}