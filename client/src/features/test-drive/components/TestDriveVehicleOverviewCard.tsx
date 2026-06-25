import type { Vehicle } from '@/features/inventory/api/vehicle-types'
import { mapVehicleToOverviewItems } from '@/features/inventory/mappers/map-vehicle-to-overview-items'

type TestDriveVehicleOverviewCardProps = {
  vehicle: Vehicle
}

export function TestDriveVehicleOverviewCard({
  vehicle,
}: TestDriveVehicleOverviewCardProps) {
  const overviewItems = mapVehicleToOverviewItems(vehicle)

  return (
    <div className="rounded-[20px] border border-slate-300 bg-white p-5">
      <h3 className="mb-4 text-body-2 font-semibold text-vc-text-primary">
        Vehicle Overview
      </h3>

      <div className="grid grid-cols-3 gap-4 lg:grid-cols-4">
        {overviewItems.map((item) => (
          <div key={item.label} className="flex flex-col gap-1">
            <span className="text-caption text-vc-text-tertiary">
              {item.label}
            </span>

            <span className="text-body-3 font-semibold text-vc-text-secondary">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}