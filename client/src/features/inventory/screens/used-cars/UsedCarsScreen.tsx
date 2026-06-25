import { InventoryLandingHero } from '../../components/landing/InventoryLandingHero'
import { InventoryLandingLayout } from '../../components/landing/InventoryLandingLayout'

const USED_CARS_DESCRIPTION =
  'Whether you’re looking to buy a used car in Singapore for daily commuting or seeking a luxury option at a competitive price, we provide a range of 2nd hand cars for sale that cater to all preferences. As one of the leading used car dealers in Singapore, VINCAR ensures a seamless buying experience with transparent pricing and professional service.'

export function UsedCarsScreen() {
  return (
    <InventoryLandingLayout
      activeKey="used-cars"
      breadcrumbLabel="Pre-owned cars"
    >
      <div className="mt-6">
        <InventoryLandingHero
          title="Used Cars for Sale in Singapore"
          description={USED_CARS_DESCRIPTION}
        />
      </div>
    </InventoryLandingLayout>
  )
}