import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import { Vehicle } from '../../api/vehicle-types'

type VehicleOverviewProps = {
  vehicle: Vehicle;
}

export function VehicleOverview({vehicle}: VehicleOverviewProps) {
  return <h1>Working</h1>
}