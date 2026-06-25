import { useQuery } from '@apollo/client/react'

import { GET_PUBLISHED_VPL_VEHICLES } from '../../api/get-published-vpl-vehicles'
import { mapVehicleListItemToCardItem } from '../../mappers/map-vehicle-list-item-to-card-item'
import { VehicleGrid } from './VehicleGrid'

type VehicleListingSectionProps = {
  pageSize?: number
}

export function VehicleListingSection({
  pageSize = 12,
}: VehicleListingSectionProps) {
  const { data, loading, error } = useQuery(GET_PUBLISHED_VPL_VEHICLES, {
    variables: {
      input: {
        pageNumber: 1,
        pageSize,
      },
    },
  })

  const vehicles =
    data?.getPublishedVPLVehicles.vehicles.map(mapVehicleListItemToCardItem) ??
    []

  if (loading) {
    return (
      <p className="text-body-3 text-vc-text-tertiary">
        Loading vehicles...
      </p>
    )
  }

  if (error) {
    return (
      <p className="text-body-3 text-red-600">
        Failed to load vehicles.
      </p>
    )
  }

  if (vehicles.length === 0) {
    return (
      <p className="text-body-3 text-vc-text-tertiary">
        No vehicles found.
      </p>
    )
  }

  return <VehicleGrid vehicles={vehicles} />
}