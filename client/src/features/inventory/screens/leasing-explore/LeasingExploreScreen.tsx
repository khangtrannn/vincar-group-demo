import { inventoryLandingContent } from '../../constants/inventory-landing-content'
import { InventoryLandingHero } from '../../components/landing/InventoryLandingHero'
import { InventoryLandingLayout } from '../../components/landing/InventoryLandingLayout'
import { VehicleListingSection } from '../../components/listing/VehicleListingSection'

const content = inventoryLandingContent.leasingExplore

export function LeasingExploreScreen() {
  return (
    <InventoryLandingLayout
      activeKey={content.activeKey}
      breadcrumbLabel={content.breadcrumbLabel}
    >
      <div className="mt-6">
        <InventoryLandingHero
          title={content.title}
          description={content.description}
        />
      </div>

      <div className="mt-8">
        <VehicleListingSection />
      </div>
    </InventoryLandingLayout>
  )
}