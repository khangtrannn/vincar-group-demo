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
    <main>
      <InventoryCategoryNav activeKey={activeKey} />

      <div className="px-4 py-6 lg:px-10">
        <Breadcrumb items={[{ label: breadcrumbLabel }]} />

        {children}
      </div>
    </main>
  )
}