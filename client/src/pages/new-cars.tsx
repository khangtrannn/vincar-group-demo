import { Breadcrumb } from "@/components/navigation/breadcrumbs";
import { InventoryCategoryNav } from "@/components/navigation/inventory-category-nav";
import { NewCarsPageHeader } from "@/features/inventory/components/new-cars-page-header";
import { GET_PUBLISHED_VPL_VEHICLES } from "@/graphql/vehicles";
import { GetPublishedVPLVehiclesData, GetPublishedVPLVehiclesVariables } from "@/types/vehicle";
import { useQuery } from "@apollo/client/react";
import {
  Box,
  Spinner,
  Text
} from "@chakra-ui/react";

export default function NewCarsRoute() {
  const { data, loading, error } = useQuery<
    GetPublishedVPLVehiclesData,
    GetPublishedVPLVehiclesVariables
  >(GET_PUBLISHED_VPL_VEHICLES, {
    variables: {
      input: {
        pageNumber: 1,
        pageSize: 8,
      },
    },
  });

  if (loading) {
    return (
      <Box p="8">
        <Spinner />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p="8">
        <Text color="red.500">Failed to load vehicles: {error.message}</Text>
      </Box>
    );
  }

  if (!data) {
    return (
      <Box p="8">
        <Text>No vehicles found.</Text>
      </Box>
    );
  }

  return (
    <>
      <InventoryCategoryNav activeKey="new-cars" />

      <main className="max-w-[1440px] mx-auto px-4 lg:px-10 pt-5 lg:pt-0 pb-5 lg:pb-8 lg:space-y-6 space-y-5">
        <Breadcrumb
          items={[
            {
              label: "New cars",
            },
          ]}
        />

        <NewCarsPageHeader />
      </main>
    </>
  );
}
