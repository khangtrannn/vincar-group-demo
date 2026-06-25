import type { Vehicle } from '../api/vehicle-types'

export type VehicleOverviewItemLabel =
  | 'Body type'
  | 'Fuel'
  | 'Transmission'
  | 'Exterior Color'
  | 'Interior Color'

export type VehicleOverviewItem = {
  label: VehicleOverviewItemLabel
  value: string
}

const KNOWN_ABBREVIATIONS = new Set(['SUV', 'MPV', 'EV', 'HEV', 'PHEV'])

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function formatDisplayValue(value: string | null | undefined) {
  if (!value) {
    return '-'
  }

  return value
    .replace(/_/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .trim()
    .split(/\s+/)
    .map((word) => {
      const upperWord = word.toUpperCase()

      if (KNOWN_ABBREVIATIONS.has(upperWord)) {
        return upperWord
      }

      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join(' ')
}

function getTransmission(vehicle: Vehicle) {
  const variantMetadata = vehicle.vehicleVariant?.metadata

  if (!isRecord(variantMetadata)) {
    return '-'
  }

  const specifications = variantMetadata.specifications

  if (!isRecord(specifications)) {
    return '-'
  }

  const transmission = specifications.transmission

  if (typeof transmission !== 'string' || transmission.trim().length === 0) {
    return '-'
  }

  const normalizedTransmission = transmission.toLowerCase()

  if (normalizedTransmission.includes('automatic')) {
    return 'Automatic'
  }

  if (normalizedTransmission.includes('manual')) {
    return 'Manual'
  }

  return formatDisplayValue(transmission)
}

export function mapVehicleToOverviewItems(
  vehicle: Vehicle,
): VehicleOverviewItem[] {
  return [
    {
      label: 'Body type',
      value: formatDisplayValue(vehicle.model.bodyType),
    },
    {
      label: 'Fuel',
      value: formatDisplayValue(vehicle.model.fuelType),
    },
    {
      label: 'Transmission',
      value: getTransmission(vehicle),
    },
    {
      label: 'Exterior Color',
      value: vehicle.exteriorColor?.name ?? '-',
    },
    {
      label: 'Interior Color',
      value: vehicle.interiorColor?.name ?? '-',
    },
  ]
}