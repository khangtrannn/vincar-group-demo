import Link from 'next/link'

import type { Vehicle } from '../../api/vehicle-types'
import { formatVehiclePrice } from '../../utils/format-vehicle-price'

type VehicleDetailHeaderProps = {
  vehicle: Vehicle
}

const baseButtonClassName =
  'inline-flex h-10 items-center justify-center gap-2 rounded-[24px] px-5 py-2 font-bold transition-all max-lg:text-body-3 lg:text-body-3 [&_svg]:h-4 [&_svg]:w-auto lg:[&_svg]:h-4'

export function VehicleDetailHeader({ vehicle }: VehicleDetailHeaderProps) {
  const priceLabel = formatVehiclePrice(vehicle.price)

  return (
    <div className="mb-8 flex flex-col items-center gap-4">
      <div className="flex w-full flex-col items-center gap-1">
        <h1 className="text-center text-heading-4 font-bold text-vc-text-primary">
          {vehicle.name}
        </h1>

        <div className="text-heading-5 font-[900] text-orange-500">
          {priceLabel}
        </div>
      </div>

      <div className="flex gap-4">
        <Link
          href={`/test-drive?vehicleId=${vehicle.id}`}
          className={`${baseButtonClassName} border border-neutral-900 bg-neutral-900 text-white hover:bg-neutral-800 active:bg-neutral-700`}
        >
          Schedule Test Drive
        </Link>

        <button
          type="button"
          className={`${baseButtonClassName} border border-slate-600 bg-transparent text-vc-text-primary hover:border-slate-700 hover:bg-neutral-900 hover:text-white active:border-slate-900 active:bg-elevation/10`}
        >
          Trade In
        </button>
      </div>
    </div>
  )
}