import type { VehicleListItem } from '../api/get-published-vpl-vehicles'
import type { VehicleCardItem } from '../components/listing/vehicle-card-types'
import { buildVehicleDetailPath } from '../utils/build-vehicle-detail-path'
import { formatVehiclePrice } from '../utils/format-vehicle-price'

export function mapVehicleListItemToCardItem(
  vehicle: VehicleListItem,
): VehicleCardItem {
  return {
    id: vehicle.id,
    href: buildVehicleDetailPath(vehicle),
    name: vehicle.name,
    priceLabel: formatVehiclePrice(vehicle.price),
    imageUrl: vehicle.imgUrl,
    badge: 'Authorised Distributor',
    owned: false,
  }
}