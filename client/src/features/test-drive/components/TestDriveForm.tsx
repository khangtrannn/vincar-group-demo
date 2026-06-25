import type { Vehicle } from '@/features/inventory/api/vehicle-types'

import { TestDriveCustomerFields } from './TestDriveCustomerFields'
import { TestDriveDatePicker } from './TestDriveDatePicker'
import { TestDrivePreferredTimeField } from './TestDrivePreferredTimeField'
import { TestDriveSubmitButton } from './TestDriveSubmitButton'

type TestDriveFormProps = {
  vehicle: Vehicle
}

export function TestDriveForm({ vehicle }: TestDriveFormProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-[20px] border border-vc-bg-primary bg-white p-5 lg:p-6">
        <h3 className="mb-6 text-center text-body-1 font-semibold text-vc-text-primary">
          Let&apos;s get your details
        </h3>

        <form className="space-y-6" onSubmit={(event) => event.preventDefault()}>
          <input type="hidden" name="vehicleId" value={vehicle.id} />
          <input type="hidden" name="preferredTime" value="10:00 AM" />

          <div className="grid gap-4 lg:grid-cols-2 lg:gap-8">
            <TestDriveCustomerFields />

            <div className="space-y-4 lg:space-y-6">
              <TestDriveDatePicker />
              <TestDrivePreferredTimeField />
            </div>
          </div>

          <TestDriveSubmitButton />
        </form>
      </div>
    </div>
  )
}