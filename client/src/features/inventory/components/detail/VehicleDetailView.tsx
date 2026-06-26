import { useState } from 'react'

import { BackLink } from '@/components/navigation/BackLink'

import type { Vehicle } from '../../api/vehicle-types'
import { VehicleDetailCtaBanner } from './VehicleDetailCtaBanner'
import { VehicleDetailHeader } from './VehicleDetailHeader'
import { VehicleGallery } from './VehicleGallery'
import { VehicleOverview } from './VehicleOverview'
import { TradeInDialog } from './trade-in/TradeInDialog'

type VehicleDetailViewProps = {
  vehicle: Vehicle
}

export function VehicleDetailView({ vehicle }: VehicleDetailViewProps) {
  const [isTradeInDialogOpen, setIsTradeInDialogOpen] = useState(false)

  return (
    <main className="bg-white">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-10">
        <section>
          <div className="py-2 lg:py-5 lg:pb-6">
            <BackLink href="/new-cars" label="Back to New Cars" />
          </div>

          <VehicleDetailHeader
            vehicle={vehicle}
            onTradeInClick={() => setIsTradeInDialogOpen(true)}
          />

          <VehicleGallery vehicle={vehicle} />
        </section>

        <VehicleOverview vehicle={vehicle} />

        <VehicleDetailCtaBanner vehicle={vehicle} />
      </div>

      <TradeInDialog
        vehicle={vehicle}
        open={isTradeInDialogOpen}
        onOpenChange={setIsTradeInDialogOpen}
      />
    </main>
  )
}