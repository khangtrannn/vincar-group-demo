import { InventoryLandingHero } from '../../components/landing/InventoryLandingHero'
import { InventoryLandingLayout } from '../../components/landing/InventoryLandingLayout'

const LEASING_EXPLORE_DESCRIPTION =
  "Whether you're seeking a powerful SUV, a stylish sedan, or an eco-friendly electric vehicle, VINCAR provides a wide range of options to suit your needs and preferences. Discover your perfect vehicle today and experience the excellence of modern driving with VINCAR's new car lineup."

export function LeasingExploreScreen() {
  return (
    <InventoryLandingLayout
      activeKey="leasing"
      breadcrumbLabel="Rental & Leasing"
    >
      <div className="mt-6">
        <InventoryLandingHero
          title="Rental & Leasing"
          description={LEASING_EXPLORE_DESCRIPTION}
        />
      </div>
    </InventoryLandingLayout>
  )
}