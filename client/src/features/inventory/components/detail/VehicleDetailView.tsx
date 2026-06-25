import type { Vehicle } from '../../api/vehicle-types'

import { VehicleGallery } from './VehicleGallery'
import { VehicleOverview } from './VehicleOverview'

type VehicleDetailViewProps = {
  vehicle: Vehicle
}

export function VehicleDetailView({ vehicle }: VehicleDetailViewProps) {
  return (
    <main className="px-4 py-6 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_420px]">
        <VehicleGallery vehicle={vehicle} />
        <VehicleOverview vehicle={vehicle} />
      </div>
    </main>
  )
}