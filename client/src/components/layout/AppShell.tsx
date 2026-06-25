import type { PropsWithChildren } from 'react'

import { SiteHeader } from './SiteHeader'
import { SiteFooter } from './SiteFooter'

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-vc-bg text-body-1">
      <SiteHeader />

      <div className="min-h-screen pt-[var(--header-height-mobile)] lg:pt-[var(--header-height)]">
        {children}
      </div>

      <SiteFooter />
    </div>
  )
}