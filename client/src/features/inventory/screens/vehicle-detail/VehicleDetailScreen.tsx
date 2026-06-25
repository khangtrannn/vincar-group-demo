
import { GET_PUBLISHED_VPL_VEHICLE, GetPublishedVPLVehicleData, GetPublishedVPLVehicleVariables } from '@/features/inventory/api/get-published-vpl-vehicle'
import { useQuery } from '@apollo/client/react'
import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { VehicleDetailView } from '../../components/detail/VehicleDetailView'

export default function VehicleDetailRoute() {
  const router = useRouter()
  const vehicleId = router.query.vehicleId

  const shouldSkipQuery = !router.isReady || typeof vehicleId !== 'string'

  const { data, loading, error } = useQuery<
    GetPublishedVPLVehicleData,
    GetPublishedVPLVehicleVariables
  >(GET_PUBLISHED_VPL_VEHICLE, {
    variables: {
      vehicleId: typeof vehicleId === 'string' ? vehicleId : '',
    },
    skip: shouldSkipQuery,
  })

  if (loading || !router.isReady) {
    return (
      <Center minH="60vh">
        <Spinner size="lg" />
      </Center>
    )
  }

  if (error) {
    return (
      <Container maxW="6xl" py={16}>
        <VStack gap={4} textAlign="center">
          <Heading size="md">Unable to load vehicle detail</Heading>
          <Text color="gray.600">{error.message}</Text>

          <Button asChild variant="outline">
            <NextLink href="/">Back to New Cars</NextLink>
          </Button>
        </VStack>
      </Container>
    )
  }

  const vehicle = data?.getPublishedVPLVehicle

  if (!vehicle) {
    return (
      <Container maxW="6xl" py={16}>
        <VStack gap={4} textAlign="center">
          <Heading size="md">Vehicle not found</Heading>
          <Text color="gray.600">
            The vehicle you are looking for may no longer be available.
          </Text>

          <Button asChild variant="outline">
            <NextLink href="/">Back to New Cars</NextLink>
          </Button>
        </VStack>
      </Container>
    )
  }

  return <VehicleDetailView vehicle={vehicle} />
}