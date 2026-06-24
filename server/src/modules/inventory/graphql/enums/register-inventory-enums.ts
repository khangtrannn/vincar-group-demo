import { registerEnumType } from 'type-graphql';

import { VehicleBodyType } from '../../enums/vehicle-body-type.enum.js';
import { VehicleCategory } from '../../enums/vehicle-category.enum.js';
import { VehicleFuelType } from '../../enums/vehicle-fuel-type.enum.js';
import { VehicleInventoryStatus } from '../../enums/vehicle-inventory-status.enum.js';

export function registerInventoryEnums() {
  registerEnumType(VehicleBodyType, {
    name: 'VehicleBodyType',
    description: 'Supported vehicle body types.',
  });

  registerEnumType(VehicleFuelType, {
    name: 'VehicleFuelType',
    description: 'Supported vehicle fuel types.',
  });

  registerEnumType(VehicleCategory, {
    name: 'VehicleCategory',
    description: 'Inventory category for a vehicle.',
  });

  registerEnumType(VehicleInventoryStatus, {
    name: 'VehicleInventoryStatus',
    description: 'Current inventory status of a vehicle.',
  });
}