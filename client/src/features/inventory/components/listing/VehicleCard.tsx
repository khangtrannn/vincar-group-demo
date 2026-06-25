import Image from 'next/image'
import Link from 'next/link'

import type { VehicleCardItem } from './vehicle-card-types'

const CAR_BACKGROUND_URL =
  'https://storage.googleapis.com/vincar-web-assets/v2.1/images/new-cars/car-bg.png'

type VehicleCardProps = {
  vehicle: VehicleCardItem
}

function VincarWatermark() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 271 40"
      height="12"
    >
      <path
        fill="currentColor"
        d="M48.928 1.144 28.492 39.036h-8.067L0 1.144h8.988l15.487 28.71L39.95 1.144h8.988zM110.003 39.026l-25.895-27.79v27.79h-8.013V1.144h8.86l25.917 27.81V1.144h8.003v37.892h-8.872zM171.735 9.7l.869 1.123-7.377 2.637-.467-.497c-3.413-3.612-8.161-5.454-14.5-5.465-4.791 0-8.554 1.207-11.458 3.58-2.904 2.393-4.282 5.252-4.303 8.896.021 3.801 1.388 6.693 4.25 9.023 2.862 2.308 6.763 3.505 11.861 3.505 6.137-.01 10.78-1.864 14.203-5.56l.552-.593 6.921 3.823-.827.964c-2.66 3.113-5.713 5.39-9.136 6.788-3.414 1.398-7.431 2.076-12.052 2.076-6.508 0-12.031-1.642-16.43-4.967-5.013-3.77-7.61-8.917-7.589-15.07-.021-6.068 2.618-11.173 7.685-14.975C138.367 1.663 143.847 0 150.271 0c9.211-.021 16.493 3.24 21.475 9.7zM221.924 39.026h-8.851l-4.133-8.017h-22.896l-4.133 8.017h-8.851l20.086-37.882h8.724l20.065 37.892zm-31.894-15.42h14.956l-7.43-14.128zM270.481 39.026h-9.412l-9.71-13.662h-16.535v13.662h-8.013V1.144h29.318c3.943 0 7.208 1.08 9.572 3.325 2.374 2.235 3.55 5.327 3.54 8.991 0 3.23-.954 5.973-2.904 8.028-1.474 1.567-3.403 2.648-5.714 3.251l9.847 14.297zM255.239 17.96c2.162 0 3.646-.444 4.515-1.154s1.325-1.705 1.336-3.347c-.011-1.779-.52-2.87-1.474-3.653-.964-.773-2.575-1.26-4.928-1.26h-19.864v9.414zM55.309 1.144l-4.282 7.974h7.133v29.908h8.013V1.144z"
      />
    </svg>
  )
}

export function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <Link href={vehicle.href} className="block h-full">
      <div
        className="group/card h-full rounded-lg bg-white p-1 transition-all duration-300 hover:shadow-lg"
        data-owned={vehicle.owned ?? false}
      >
        <div className="relative w-full pb-[68.75%]">
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <Image
              src={CAR_BACKGROUND_URL}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 25vw"
              className="z-0 object-cover"
            />

            {vehicle.imageUrl ? (
              <Image
                src={vehicle.imageUrl}
                alt={vehicle.name}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="z-[1] object-cover transition-all duration-700 group-hover/card:scale-105 group-data-[owned=true]/card:grayscale-[0.8]"
              />
            ) : null}

            <div className="absolute bottom-2 left-1/2 z-[2] flex -translate-x-1/2 items-end gap-1 text-black/10">
              <VincarWatermark />
            </div>

            <div className="absolute inset-0 z-[3] hidden group-data-[owned=true]/card:block">
              <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-vc-semibold text-white">
                  SOLD
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 space-y-2 px-2 pb-5">
          <div className="flex flex-col items-start gap-2">
            <div className="grow text-heading-4 font-semibold text-orange-500">
              {vehicle.priceLabel}
            </div>

            {vehicle.badge ? (
              <div className="rounded-xl border border-vc-border-highlight bg-orange-50 px-2 text-caption text-vc-text-secondary lg:py-0.5">
                {vehicle.badge}
              </div>
            ) : null}
          </div>

          <h3 className="line-clamp-2 min-h-10 text-body-2 font-vc-bold text-vc-text-secondary">
            {vehicle.name}
          </h3>
        </div>
      </div>
    </Link>
  )
}