import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'

type VehicleOverviewProps = {
  bodyType: string
  fuel: string
  transmission: string
  exteriorColor: string
  interiorColor: string
}

const overviewItems = [
  ['Body type', 'bodyType'],
  ['Fuel', 'fuel'],
  ['Transmission', 'transmission'],
  ['Exterior Color', 'exteriorColor'],
  ['Interior Color', 'interiorColor'],
] as const

export function VehicleOverview({
  bodyType,
  fuel,
  transmission,
  exteriorColor,
  interiorColor,
}: VehicleOverviewProps) {
  const values = {
    bodyType,
    fuel,
    transmission,
    exteriorColor,
    interiorColor,
  }

  return (
    <Box bg="#f8faff" rounded="22px" px={{ base: 5, md: 7 }} py={7}>
      <VStack align="stretch" gap={6}>
        <Heading
          as="h2"
          fontSize={{ base: '24px', md: '28px' }}
          color="#07142f"
        >
          Vehicle Overview
        </Heading>

        <Grid
          templateColumns={{
            base: '1fr',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(5, 1fr)',
          }}
          gap={{ base: 5, md: 8 }}
        >
          {overviewItems.map(([label, key]) => (
            <Box key={key}>
              <Text color="#66728a" fontSize="15px" mb={2}>
                {label}
              </Text>

              <Text color="#26364f" fontSize="17px" fontWeight="700">
                {values[key] || '-'}
              </Text>
            </Box>
          ))}
        </Grid>
      </VStack>
    </Box>
  )
}