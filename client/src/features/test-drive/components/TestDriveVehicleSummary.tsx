import type { Vehicle } from '@/features/inventory/api/vehicle-types'

import { TestDriveVehicleImage } from './TestDriveVehicleImage'
import { TestDriveVehicleOverviewCard } from './TestDriveVehicleOverviewCard'

type TestDriveVehicleSummaryProps = {
  vehicle: Vehicle
}

export function TestDriveVehicleSummary({
  vehicle,
}: TestDriveVehicleSummaryProps) {
  return (
    <div className="space-y-5 max-lg:order-last">
      <TestDriveVehicleImage vehicle={vehicle} />
      <TestDriveVehicleOverviewCard vehicle={vehicle} />
    </div>
  )
}