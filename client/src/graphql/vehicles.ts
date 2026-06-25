import { gql } from '@apollo/client';

export const GET_PUBLISHED_VPL_VEHICLE = gql`
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
`;

export const GET_PUBLISHED_VPL_VEHICLES = gql`
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