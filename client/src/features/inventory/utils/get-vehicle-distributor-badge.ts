import type { VehicleListItem } from '../api/get-published-vpl-vehicles'

const AUTHORISED_DISTRIBUTOR_MAKES = new Set(['GAC', 'PROTON'])

export function getVehicleDistributorBadge(vehicle: VehicleListItem) {
  const makeName = vehicle.model.make.name.trim().toUpperCase()

  return AUTHORISED_DISTRIBUTOR_MAKES.has(makeName)
    ? 'Authorised Distributor'
    : undefined
}