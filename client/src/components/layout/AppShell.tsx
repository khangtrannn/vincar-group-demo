import type { PropsWithChildren } from 'react'

import { SiteHeader } from './SiteHeader'

export function AppShell({ children }: PropsWithChildren) {
  return (
    <>
      <SiteHeader />

      <div className="min-h-screen pt-[var(--header-height-mobile)] lg:pt-[var(--header-height)]">
        {children}
      </div>
    </>
  )
}