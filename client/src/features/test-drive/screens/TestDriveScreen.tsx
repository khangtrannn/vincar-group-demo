import { skipToken, useQuery } from '@apollo/client/react'
import { useRouter } from 'next/router'

import { GET_PUBLISHED_VPL_VEHICLE } from '@/features/inventory/api/get-published-vpl-vehicle'

import { TestDriveCustomerFields } from '../components/TestDriveCustomerFields'
import { TestDrivePageHeader } from '../components/TestDrivePageHeader'
import { TestDriveVehicleSummary } from '../components/TestDriveVehicleSummary'

function TestDriveFormPlaceholder() {
  return (
    <div className="space-y-6">
      <div className="rounded-[20px] border border-vc-bg-primary bg-white p-5 lg:p-6">
        <h3 className="mb-6 text-center text-body-1 font-semibold text-vc-text-primary">
          Let&apos;s get your details
        </h3>

        <div className="max-w-[360px]">
          <TestDriveCustomerFields />
        </div>
      </div>
    </div>
  )
}

export function TestDriveScreen() {
  const router = useRouter()
  const vehicleId = router.query.vehicleId

  const resolvedVehicleId =
    typeof vehicleId === 'string' && vehicleId.length > 0 ? vehicleId : null

  const { data, loading, error } = useQuery(
    GET_PUBLISHED_VPL_VEHICLE,
    resolvedVehicleId
      ? {
          variables: {
            vehicleId: resolvedVehicleId,
          },
        }
      : skipToken,
  )

  const vehicle = data?.getPublishedVPLVehicle

  if (!resolvedVehicleId || loading) {
    return (
      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-[1440px] px-4 py-8 lg:px-10 lg:py-10">
          <p className="text-body-3 text-vc-text-tertiary">
            Loading test drive details...
          </p>
        </div>
      </main>
    )
  }

  if (error || !vehicle) {
    return (
      <main className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-[1440px] px-4 py-8 lg:px-10 lg:py-10">
          <p className="text-body-3 text-red-600">
            Failed to load vehicle details.
          </p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-[1440px] space-y-4 px-4 py-8 lg:space-y-6 lg:px-10 lg:py-10">
        <TestDrivePageHeader vehicle={vehicle} />

        <section>
          <div className="mx-auto grid max-w-[1100px] gap-4 lg:grid-cols-[2fr_3fr] lg:gap-8">
            <TestDriveVehicleSummary vehicle={vehicle} />
            <TestDriveFormPlaceholder />
          </div>
        </section>
      </div>
    </main>
  )
}