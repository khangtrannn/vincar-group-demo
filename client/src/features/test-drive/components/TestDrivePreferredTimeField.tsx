import { Clock, X } from 'lucide-react'

export function TestDrivePreferredTimeField() {
  return (
    <div className="space-y-2">
      <label className="block text-caption font-semibold text-vc-text-secondary lg:text-body-2">
        Preferred time
      </label>

      <div className="relative w-full">
        <button
          type="button"
          className="flex h-10 w-full items-center justify-between rounded-[12px] border border-input bg-background px-4 py-2 text-body-3 font-medium text-vc-text-primary transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <span className="flex items-center gap-2">
            <Clock className="size-4 text-vc-text-tertiary" aria-hidden="true" />
            10:00 AM
          </span>
        </button>

        <X
          className="absolute right-4 top-1/2 size-4 -translate-y-1/2 text-vc-text-primary"
          aria-hidden="true"
        />
      </div>

      <p className="text-caption text-vc-text-secondary">
        Test drive between <span className="font-semibold">10:00am</span> -{' '}
        <span className="font-semibold">7:00pm</span> daily
      </p>
    </div>
  )
}