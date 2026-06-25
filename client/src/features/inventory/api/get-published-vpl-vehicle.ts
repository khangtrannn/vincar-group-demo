import { gql, type TypedDocumentNode } from '@apollo/client'

import type { Vehicle } from './vehicle-types'

export type GetPublishedVPLVehicleData = {
  getPublishedVPLVehicle: Vehicle | null
}

export type GetPublishedVPLVehicleVariables = {
  vehicleId: string
}

export const GET_PUBLISHED_VPL_VEHICLE: TypedDocumentNode<
  GetPublishedVPLVehicleData,
  GetPublishedVPLVehicleVariables
> = gql`
  query GetPublishedVPLVehicle($vehicleId: ID!) {
    getPublishedVPLVehicle(vehicleId: $vehicleId) {
      id
      vincarId
      name
      price
      imgUrl
      metadata

      model {
        id
        name
        bodyType
        fuelType
        make {
          id
          name
        }
      }

      vehicleVariant {
        id
        name
        metadata
      }

      exteriorColor {
        id
        name
      }

      interiorColor {
        id
        name
      }

      images {
        id
        url
        sortOrder
        isPrimary
      }
    }
  }
`