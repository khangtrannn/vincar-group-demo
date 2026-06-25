import { VehicleCard } from './VehicleCard'
import type { VehicleCardItem } from './vehicle-card-types'

type VehicleGridProps = {
  vehicles: VehicleCardItem[]
}

export function VehicleGrid({ vehicles }: VehicleGridProps) {
  return (
    <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </section>
  )
}