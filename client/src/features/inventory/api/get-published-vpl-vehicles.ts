import { gql, type TypedDocumentNode } from '@apollo/client';

export type VehicleListItem = {
  id: string;
  name: string;
  vincarId: string;
  price: number | null;
  leasingMonthlyPrice: number | null;
  imgUrl: string | null;
  model: {
    id: string;
    name: string;
    make: {
      id: string;
      name: string;
    };
  };
};

export type GetPublishedVPLVehiclesData = {
  getPublishedVPLVehicles: {
    paginationInfo: {
      currentPageNumber: number;
      currentPageSize: number;
      hasNextPage: boolean;
      totalPageNumber: number;
    };
    vehicles: VehicleListItem[];
  };
};

export type GetPublishedVPLVehiclesVariables = {
  input: {
    pageNumber: number;
    pageSize: number;
  };
};

export const GET_PUBLISHED_VPL_VEHICLES: TypedDocumentNode<
  GetPublishedVPLVehiclesData,
  GetPublishedVPLVehiclesVariables
> = gql`
  query GetPublishedVPLVehicles($input: GetPublishedVPLVehiclesInput!) {
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