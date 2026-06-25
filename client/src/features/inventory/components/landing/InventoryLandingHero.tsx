import { Search } from 'lucide-react'

type InventoryLandingHeroProps = {
  title: string
  description: string
}

export function InventoryLandingHero({
  title,
  description,
}: InventoryLandingHeroProps) {
  return (
    <section className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between lg:gap-20">
      <div className="flex-1">
        <h1 className="mb-3 text-heading-4 font-vc-bold text-vc-text-primary">
          {title}
        </h1>

        <p className="text-caption !text-vc-text-tertiary">
          <span className="inline">{description}</span>
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          className="flex h-10 items-center justify-center gap-2 rounded-[24px] border border-neutral-900 bg-neutral-900 px-5 py-2 font-vc-semibold text-white transition-all hover:bg-neutral-800 active:bg-neutral-700 max-lg:text-body-3 lg:text-body-3 [&_svg]:h-4 [&_svg]:w-auto"
        >
          <span className="shrink-0">
            <Search aria-hidden="true" strokeWidth={2} />
          </span>
          Search
        </button>
      </div>
    </section>
  )
}