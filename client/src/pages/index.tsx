import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import { VehicleCategoryNav } from "@/components/navigation/VehicleCategoryNav";
import { AppBreadcrumb } from "@/components/navigation/AppBreadcrumb";

type GetPublishedVPLVehiclesData = {
  getPublishedVPLVehicles: {
    paginationInfo: {
      currentPageNumber: number;
      currentPageSize: number;
      hasNextPage: boolean;
      totalPageNumber: number;
    };
    vehicles: {
      id: string;
      name: string;
      vincarId: string;
      price: number | null;
      leasingMonthlyPrice: number | null;
      imgUrl: string | null;
      model: {
        name: string;
        make: {
          name: string;
        };
      };
    }[];
  };
};

type GetPublishedVPLVehiclesVariables = {
  input: {
    pageNumber: number;
    pageSize: number;
  };
};

const GET_PUBLISHED_VPL_VEHICLES = gql`
  query GetPublishedVPLVehicles($input: GetPublishedVPLVehiclesInput) {
    getPublishedVPLVehicles(input: $input) {
      paginationInfo {
        currentPageNumber
        currentPageSize
        hasNextPage
        totalPageNumber
      }
      vehicles {
        id
        name
        vincarId
        price
        leasingMonthlyPrice
        imgUrl
        model {
          id
          name
          make {
            id
            name
          }
        }
      }
    }
  }
`;

export default function HomePage() {
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
      <VehicleCategoryNav activeKey="new-cars" />

      <main className="max-w-[1440px] mx-auto px-4 lg:px-10 pt-5 lg:pt-0 pb-5 lg:pb-8 lg:space-y-6 space-y-5">
        <AppBreadcrumb
          items={[
            {
              label: "New cars",
            },
          ]}
        />
      </main>
    </>
  );
}
