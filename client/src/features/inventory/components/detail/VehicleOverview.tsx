import { ArrowRight } from 'lucide-react'

import type { Vehicle } from '../../api/vehicle-types'
import { mapVehicleToOverviewItems } from '../../mappers/map-vehicle-to-overview-items'

type VehicleOverviewProps = {
  vehicle: Vehicle
}

export function VehicleOverview({ vehicle }: VehicleOverviewProps) {
  const overviewItems = mapVehicleToOverviewItems(vehicle)

  return (
    <section className="space-y-4 py-5 lg:space-y-8 lg:py-12">
      <div className="mx-auto w-full max-w-[894px] rounded-[20px] bg-slate-50 p-5 lg:p-6">
        <h2 className="mb-4 text-body-1 font-semibold text-vc-text-primary">
          Vehicle Overview
        </h2>

        <div className="grid grid-cols-3 gap-5 lg:grid-cols-5 lg:gap-8">
          {overviewItems.map((item) => (
            <div key={item.label} className="flex flex-col gap-2">
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

      <div className="flex items-center justify-center">
        <button
          type="button"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-[24px] border border-slate-600 bg-transparent px-5 py-2 font-semibold text-vc-text-primary transition-all hover:border-slate-700 hover:bg-neutral-900 hover:text-white active:border-slate-900 active:bg-elevation/10 max-lg:text-body-3 lg:text-body-3 [&_svg]:h-4 [&_svg]:w-auto lg:[&_svg]:h-4"
        >
          <span className="shrink-0">
            <ArrowRight aria-hidden="true" strokeWidth={2} />
          </span>
          View all features
        </button>
      </div>
    </section>
  )
}