import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useCallback, useEffect, useMemo, useState } from 'react'

import { cn } from '@/lib/cn'

import type { Vehicle } from '../../api/vehicle-types'

type VehicleGalleryProps = {
  vehicle: Vehicle
}

type GalleryImage = {
  id: string
  url: string
  alt: string
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === 'string')
}

function getMetadataImages(vehicle: Vehicle) {
  const metadataImages = vehicle.metadata?.images

  if (!isStringArray(metadataImages)) {
    return []
  }

  return metadataImages
}

function getVehicleGalleryImages(vehicle: Vehicle): GalleryImage[] {
  const relationImageUrls = [...(vehicle.images ?? [])]
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((image) => image.url)

  const metadataImageUrls = getMetadataImages(vehicle)

  let urls =
    relationImageUrls.length > 0
      ? relationImageUrls
      : metadataImageUrls.length > 0
        ? metadataImageUrls
        : vehicle.imgUrl
          ? [vehicle.imgUrl]
          : []

  // Detail gallery in the reference starts from gallery images such as image1.jpg.
  // The card/listing image is usually image0.jpg, so avoid duplicating it here.
  if (vehicle.imgUrl && urls.length > 1) {
    urls = urls.filter((url) => url !== vehicle.imgUrl)
  }

  return urls.map((url, index) => ({
    id: `${url}-${index}`,
    url,
    alt: `${vehicle.name} image ${index + 1}`,
  }))
}

export function VehicleGallery({ vehicle }: VehicleGalleryProps) {
  const images = useMemo(() => getVehicleGalleryImages(vehicle), [vehicle])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    duration: 24,
    skipSnaps: false,
  })

  const handleSelect = useCallback(() => {
    if (!emblaApi) {
      return
    }

    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) {
      return
    }

    handleSelect()

    emblaApi.on('select', handleSelect)
    emblaApi.on('reInit', handleSelect)

    return () => {
      emblaApi.off('select', handleSelect)
      emblaApi.off('reInit', handleSelect)
    }
  }, [emblaApi, handleSelect])

  const handleThumbnailClick = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index)
    },
    [emblaApi],
  )

  if (images.length === 0) {
    return (
      <div className="mx-auto max-w-[894px] rounded-[12px] bg-slate-100 p-10 text-center">
        <p className="text-body-3 text-vc-text-tertiary">
          No vehicle images available.
        </p>
      </div>
    )
  }

  return (
    <div className="mx-auto grid max-w-[894px] grid-cols-1 gap-3 lg:grid-cols-[120px_1fr]">
      <div className="order-last relative h-full w-full max-w-full lg:order-first lg:max-h-[480px]">
        <div className="no-scrollbar h-full w-full max-lg:overflow-x-auto lg:overflow-y-auto">
          <div className="flex shrink-0 flex-row gap-1 max-lg:w-fit max-lg:pr-10 lg:h-fit lg:flex-col lg:pb-16">
            {images.map((image, index) => {
              const isActive = index === selectedIndex

              return (
                <button
                  key={image.id}
                  type="button"
                  aria-label={`View image ${index + 1}`}
                  aria-current={isActive}
                  onClick={() => handleThumbnailClick(index)}
                  className={cn(
                    "relative aspect-[65/52] w-16 overflow-hidden rounded border-2 transition-all after:absolute after:inset-0 after:bg-black/40 after:transition-all after:content-[''] hover:after:bg-black/20 lg:aspect-[115/100] lg:w-full",
                    isActive
                      ? 'border-orange-500 after:hidden'
                      : 'border-transparent',
                  )}
                >
                  <Image
                    src={image.url}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </button>
              )
            })}
          </div>
        </div>

        <div className="pointer-events-none absolute max-lg:right-0 max-lg:top-0 max-lg:h-full max-lg:w-10 max-lg:bg-gradient-to-r lg:bottom-0 lg:left-0 lg:h-16 lg:w-full lg:bg-gradient-to-b from-transparent to-white" />
      </div>

      <div className="relative min-h-[240px] w-full lg:min-h-0">
        <div
          ref={emblaRef}
          className="absolute inset-0 overflow-hidden"
          role="region"
          aria-roledescription="carousel"
        >
          <div className="-ml-4 flex h-full">
            {images.map((image, index) => (
              <div
                key={image.id}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${images.length}`}
                className="min-w-0 shrink-0 grow-0 basis-full pl-4"
              >
                <div className="relative h-full w-full overflow-hidden rounded-[12px] bg-slate-100">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    priority={index === 0}
                    sizes="(min-width: 1024px) 774px, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute left-0 top-0 z-10 flex w-full items-start justify-between p-3 lg:p-5">
          <span className="text-caption text-vc-text-tertiary">
            {selectedIndex + 1} / {images.length}
          </span>
        </div>
      </div>
    </div>
  )
}