import type { Vehicle } from '@/features/inventory/api/vehicle-types'

type TestDrivePageHeaderProps = {
  vehicle: Vehicle
}

export function TestDrivePageHeader({ vehicle }: TestDrivePageHeaderProps) {
  return (
    <section className="py-2 lg:py-8">
      <div className="flex flex-col items-center gap-2 px-0 lg:gap-4 lg:px-10">
        <h1 className="text-center text-heading-4 font-semibold text-vc-text-primary">
          You are schedule a test drive for
        </h1>

        <h2 className="text-center text-heading-5 font-semibold text-orange-500">
          {vehicle.name}
        </h2>
      </div>
    </section>
  )
}