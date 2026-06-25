import { inventoryLandingContent } from '../../constants/inventory-landing-content'
import { InventoryLandingHero } from '../../components/landing/InventoryLandingHero'
import { InventoryLandingLayout } from '../../components/landing/InventoryLandingLayout'
import { VehicleListingSection } from '../../components/listing/VehicleListingSection'

const content = inventoryLandingContent.newCars

export function NewCarsScreen() {
  return (
    <InventoryLandingLayout
      activeKey={content.activeKey}
      breadcrumbLabel={content.breadcrumbLabel}
    >
      <InventoryLandingHero
        title={content.title}
        description={content.description}
      />

      <VehicleListingSection />
    </InventoryLandingLayout>
  )
}