import type { ReactNode } from 'react'

import { Breadcrumb } from '@/components/navigation/Breadcrumb'

import {
  InventoryCategoryNav,
  type InventoryCategoryNavKey,
} from '../category-nav/InventoryCategoryNav'

type InventoryLandingLayoutProps = {
  activeKey: InventoryCategoryNavKey
  breadcrumbLabel: string
  children: ReactNode
}

export function InventoryLandingLayout({
  activeKey,
  breadcrumbLabel,
  children,
}: InventoryLandingLayoutProps) {
  return (
    <>
      <InventoryCategoryNav activeKey={activeKey} />

      <main className="mx-auto max-w-[1440px] space-y-5 px-4 pb-5 pt-5 lg:space-y-6 lg:px-10 lg:pb-8 lg:pt-0">
        <Breadcrumb items={[{ label: breadcrumbLabel }]} />
        {children}
      </main>
    </>
  )
}