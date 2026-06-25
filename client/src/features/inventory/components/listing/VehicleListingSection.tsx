import { useQuery } from '@apollo/client/react'

import { GET_PUBLISHED_VPL_VEHICLES } from '../../api/get-published-vpl-vehicles'
import { mapVehicleListItemToCardItem } from '../../mappers/map-vehicle-list-item-to-card-item'
import { VehicleGrid } from './VehicleGrid'
import { DriveHomeBanner } from './DriveHomeBanner'

type VehicleListingSectionProps = {
  pageSize?: number
}

const PROMO_INSERT_INDEX = 8

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
      <div className="space-y-5">
        <p className="text-body-3 text-vc-text-tertiary">
          Loading vehicles...
        </p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="space-y-5">
        <p className="text-body-3 text-red-600">
          Failed to load vehicles.
        </p>
      </div>
    )
  }

  if (vehicles.length === 0) {
    return (
      <div className="space-y-5">
        <p className="text-body-3 text-vc-text-tertiary">
          No vehicles found.
        </p>
      </div>
    )
  }

  const firstBatch = vehicles.slice(0, PROMO_INSERT_INDEX)
  const remainingBatch = vehicles.slice(PROMO_INSERT_INDEX)

  return (
    <div className="space-y-5">
      <VehicleGrid vehicles={firstBatch} />

      {remainingBatch.length > 0 ? <DriveHomeBanner /> : null}

      {remainingBatch.length > 0 ? (
        <VehicleGrid vehicles={remainingBatch} />
      ) : null}
    </div>
  )
}