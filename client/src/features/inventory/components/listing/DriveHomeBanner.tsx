import Image from 'next/image'
import Link from 'next/link'

const DRIVE_HOME_BANNER_IMAGE_URL =
  'https://storage.googleapis.com/vincar-web-assets/v2.2/images/ad-banners/new-cars.png'

export function DriveHomeBanner() {
  return (
    <Link href="#" className="-mx-4 block w-auto lg:mx-0">
      <div className="relative w-full pb-[16.6667%]">
        <div className="absolute inset-0 overflow-hidden lg:rounded-[12px]">
          <Image
            src={DRIVE_HOME_BANNER_IMAGE_URL}
            alt="Drive Home Your Dream Car"
            fill
            sizes="100vw"
            className="z-0 object-cover"
          />

          <div className="relative mx-auto flex h-full flex-col items-center gap-4 px-6 py-4 text-center text-slate-800 lg:gap-5 lg:px-16 lg:py-8">
            <h4 className="text-heading-3 font-semibold">
              Drive Home Your Dream Car
            </h4>
          </div>
        </div>
      </div>
    </Link>
  )
}