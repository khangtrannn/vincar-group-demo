import Image from 'next/image'

import type { Vehicle } from '@/features/inventory/api/vehicle-types'

type TestDriveVehicleImageProps = {
  vehicle: Vehicle
}

export function TestDriveVehicleImage({ vehicle }: TestDriveVehicleImageProps) {
  return (
    <div className="relative aspect-[358/230] w-full overflow-hidden rounded-[12px] bg-slate-100 lg:aspect-[438/281]">
      {vehicle.imgUrl ? (
        <Image
          src={vehicle.imgUrl}
          alt={vehicle.name}
          fill
          sizes="(min-width: 1024px) 438px, 100vw"
          className="object-cover"
        />
      ) : null}
    </div>
  )
}