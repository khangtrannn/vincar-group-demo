import { BackLink } from '@/components/navigation/BackLink'

import type { Vehicle } from '../../api/vehicle-types'

type VehicleDetailViewProps = {
  vehicle: Vehicle
}

export function VehicleDetailView({ vehicle }: VehicleDetailViewProps) {
  return (
    <main className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-10">
        <section>
          <div className="py-2 lg:py-5 lg:pb-6">
            <BackLink href="/new-cars" label="Back to New Cars" />
          </div>

          <div className="flex flex-col items-center gap-1 pb-8">
            <h1 className="text-center text-heading-4 font-semibold text-vc-text-primary">
              {vehicle.name}
            </h1>
          </div>
        </section>
      </div>
    </main>
  )
}