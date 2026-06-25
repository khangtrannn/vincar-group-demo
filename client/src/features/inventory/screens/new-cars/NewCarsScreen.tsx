import { useQuery } from '@apollo/client/react';

import {
  GET_PUBLISHED_VPL_VEHICLES,
} from '../../api/get-published-vpl-vehicles';
import { InventoryLandingHero } from '../../components/landing/InventoryLandingHero';
import { InventoryLandingLayout } from '../../components/landing/InventoryLandingLayout';
import { VehicleGrid } from '../../components/listing/VehicleGrid';
import { mapVehicleListItemToCardItem } from '../../mappers/map-vehicle-list-item-to-card-item';

const NEW_CARS_DESCRIPTION =
  "Whether you're seeking a powerful SUV, a stylish sedan, or an eco-friendly electric vehicle, VINCAR provides a wide range of options to suit your needs and preferences. Discover your perfect vehicle today and experience the excellence of modern driving with VINCAR's new car lineup.";

export function NewCarsScreen() {
  const { data, loading, error } = useQuery(GET_PUBLISHED_VPL_VEHICLES, {
    variables: {
      input: {
        pageNumber: 1,
        pageSize: 16,
      },
    },
  });

  const vehicles =
    data?.getPublishedVPLVehicles.vehicles.map(mapVehicleListItemToCardItem) ?? []

  return (
    <InventoryLandingLayout activeKey="new-cars" breadcrumbLabel="New cars">
      <div className="mt-6">
        <InventoryLandingHero
          title="New Cars for Sale in Singapore"
          description={NEW_CARS_DESCRIPTION}
        />
      </div>

      <div className="mt-8">
        {loading ? (
          <p className="text-body-3 text-vc-text-tertiary">
            Loading vehicles...
          </p>
        ) : null}

        {error ? (
          <p className="text-body-3 text-red-600">
            Failed to load vehicles.
          </p>
        ) : null}

        {!loading && !error && vehicles.length === 0 ? (
          <p className="text-body-3 text-vc-text-tertiary">
            No vehicles found.
          </p>
        ) : null}

        {!loading && !error && vehicles.length > 0 ? (
          <VehicleGrid vehicles={vehicles} />
        ) : null}
      </div>
    </InventoryLandingLayout>
  );
}