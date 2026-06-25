import Image from 'next/image'
import Link from 'next/link'

import type { Vehicle } from '../../api/vehicle-types'

type VehicleDetailCtaBannerProps = {
  vehicle: Vehicle
}

const DRIVE_HOME_BANNER_IMAGE_URL =
  'https://storage.googleapis.com/vincar-web-assets/v2.2/images/ad-banners/new-cars.png'

export function VehicleDetailCtaBanner({
  vehicle,
}: VehicleDetailCtaBannerProps) {
  return (
    <Link
      href={`/test-drive?vehicleId=${vehicle.id}`}
      className="-mx-4 block w-auto py-3 lg:mx-0 lg:py-5"
    >
      <div className="relative w-full pb-[16.6667%]">
        <div className="absolute inset-0 overflow-hidden lg:rounded-[12px]">
          <Image
            src={DRIVE_HOME_BANNER_IMAGE_URL}
            alt="Drive Home Your Dream Car"
            fill
            sizes="100vw"
            className="z-0 object-cover"
          />

          <div className="relative mx-auto flex h-full flex-col items-start gap-4 px-6 py-4 text-left text-slate-800 lg:gap-5 lg:px-16 lg:py-8">
            <h4 className="text-heading-3 font-semibold">
              Drive Home Your Dream Car
            </h4>

            <span className="inline-flex h-10 items-center justify-center gap-2 rounded-[24px] border border-neutral-900 bg-neutral-900 px-5 py-2 font-semibold text-white transition-all hover:bg-neutral-800 active:bg-neutral-700 max-lg:text-body-3 max-lg:!text-body-3 lg:h-[52px] lg:rounded-[32px] lg:px-8 lg:py-4 lg:text-body-1 [&_svg]:h-4 [&_svg]:w-auto lg:[&_svg]:h-6">
              Schedule Viewing
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}