import { VehicleListItem } from '../api/get-published-vpl-vehicles';
import { slugifyVehicleSegment } from './slugify-vehicle-segment';

export function buildVehicleDetailPath(vehicle: VehicleListItem) {
  const makeSlug = slugifyVehicleSegment(vehicle.model.make.name);
  const modelSlug = slugifyVehicleSegment(vehicle.model.name);
  const variantSlug = slugifyVehicleSegment(vehicle.name);

  return `/car/new-car/${makeSlug}/${modelSlug}/${variantSlug}/${vehicle.id}`;
}