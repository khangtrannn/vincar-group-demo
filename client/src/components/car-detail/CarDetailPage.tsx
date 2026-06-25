import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react'

import { getMetadataStringValue } from '../../../lib/get-metadata-value'
import { formatCurrency } from '../../../lib/format-currency'
import { Vehicle } from '../../../types/vehicle'
import { CarGallery } from './CarGallery'
import { VehicleOverview } from './VehicleOverview'

type CarDetailPageProps = {
  vehicle: Vehicle
}

export function CarDetailPage({ vehicle }: CarDetailPageProps) {
  const transmission =
    getMetadataStringValue(vehicle.metadata, 'transmission') ??
    getMetadataStringValue(vehicle.vehicleVariant?.metadata, 'transmission') ??
    '-'

  return (
    <Container maxW="1080px" py={{ base: 8, md: 10 }}>
      <VStack gap={{ base: 8, md: 10 }} align="stretch">
        <VStack gap={3} textAlign="center">
          <Heading
            as="h1"
            fontSize={{ base: '28px', md: '40px' }}
            lineHeight="1.1"
            fontWeight="800"
            color="#07142f"
          >
            {vehicle.name}
          </Heading>

          <Text
            fontSize={{ base: '24px', md: '30px' }}
            lineHeight="1"
            fontWeight="800"
            color="#ff6b13"
          >
            {formatCurrency(vehicle.price)}
          </Text>

          <HStack gap={4} pt={3} flexWrap="wrap" justify="center">
            <Button
              rounded="full"
              bg="#111111"
              color="white"
              h="48px"
              px={8}
              _hover={{ bg: '#222222' }}
            >
              Schedule Test Drive
            </Button>

            <Button
              rounded="full"
              variant="outline"
              borderColor="#7b879c"
              color="#07142f"
              h="48px"
              px={8}
              _hover={{ bg: 'gray.50' }}
            >
              Trade In
            </Button>
          </HStack>
        </VStack>

        <CarGallery vehicle={vehicle} />

        <VehicleOverview
          bodyType={vehicle.model.bodyType}
          fuel={vehicle.model.fuelType}
          transmission={transmission}
          exteriorColor={vehicle.exteriorColor?.name ?? '-'}
          interiorColor={vehicle.interiorColor?.name ?? '-'}
        />

        <Box textAlign="center">
          <Button
            rounded="full"
            variant="outline"
            borderColor="#7b879c"
            color="#07142f"
            h="48px"
            px={8}
          >
            → View all features
          </Button>
        </Box>
      </VStack>
    </Container>
  )
}