import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react'
import { gql } from '@apollo/client'
import { useQuery } from '@apollo/client/react'

type GetPublishedVPLVehiclesData = {
  getPublishedVPLVehicles: {
    paginationInfo: {
      currentPageNumber: number
      currentPageSize: number
      hasNextPage: boolean
      totalPageNumber: number
    }
    vehicles: {
      id: string
      name: string
      vincarId: string
      price: number | null
      leasingMonthlyPrice: number | null
      imgUrl: string | null
      model: {
        name: string
        make: {
          name: string
        }
      }
    }[]
  }
}

type GetPublishedVPLVehiclesVariables = {
  input: {
    pageNumber: number
    pageSize: number
  }
}

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
`

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
  })

  if (loading) {
    return (
      <Box p="8">
        <Spinner />
      </Box>
    )
  }

  if (error) {
    return (
      <Box p="8">
        <Text color="red.500">Failed to load vehicles: {error.message}</Text>
      </Box>
    )
  }

  if (!data) {
    return (
      <Box p="8">
        <Text>No vehicles found.</Text>
      </Box>
    )
  }

  return (
    <Box p="8">
      <VStack align="stretch" gap="6">
        <Box>
          <Heading>VINCAR Demo</Heading>
          <Text color="gray.500">
            Page {data.getPublishedVPLVehicles.paginationInfo.currentPageNumber}{' '}
            of {data.getPublishedVPLVehicles.paginationInfo.totalPageNumber}
          </Text>
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap="6">
          {data.getPublishedVPLVehicles.vehicles.map((vehicle) => (
            <Box
              key={vehicle.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
            >
              {vehicle.imgUrl ? (
                <Image
                  src={vehicle.imgUrl}
                  alt={vehicle.name}
                  width="100%"
                  height="180px"
                  objectFit="cover"
                />
              ) : null}

              <Box p="4">
                <Text fontSize="sm" color="gray.500">
                  {vehicle.model.make.name} / {vehicle.model.name}
                </Text>

                <Heading size="sm" mt="1">
                  {vehicle.name}
                </Heading>

                <Text mt="2" fontWeight="bold">
                  {vehicle.price
                    ? `$${vehicle.price.toLocaleString()}`
                    : 'Price on request'}
                </Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  )
}