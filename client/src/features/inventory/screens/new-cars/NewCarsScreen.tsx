import { InventoryLandingHero } from '../../components/landing/InventoryLandingHero'
import { InventoryLandingLayout } from '../../components/landing/InventoryLandingLayout'

const NEW_CARS_DESCRIPTION =
  "Whether you're seeking a powerful SUV, a stylish sedan, or an eco-friendly electric vehicle, VINCAR provides a wide range of options to suit your needs and preferences. Discover your perfect vehicle today and experience the excellence of modern driving with VINCAR's new car lineup."

export function NewCarsScreen() {
  return (
    <InventoryLandingLayout activeKey="new-cars" breadcrumbLabel="New cars">
      <div className="mt-6">
        <InventoryLandingHero
          title="New Cars for Sale in Singapore"
          description={NEW_CARS_DESCRIPTION}
        />
      </div>

    </InventoryLandingLayout>
  )
}