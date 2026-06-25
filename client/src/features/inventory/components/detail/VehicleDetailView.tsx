import { BackLink } from '@/components/navigation/BackLink'

import type { Vehicle } from '../../api/vehicle-types'
import { VehicleDetailHeader } from './VehicleDetailHeader'
import { VehicleGallery } from './VehicleGallery'

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

          <VehicleDetailHeader vehicle={vehicle} />

          <VehicleGallery vehicle={vehicle} />
        </section>
      </div>
    </main>
  )
}