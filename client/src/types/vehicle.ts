export type VehicleImage = {
  id: string;
  url: string;
  sortOrder: number;
  isPrimary: boolean;
};

export type VehicleColor = {
  id: string;
  name: string;
};

export type VehicleMake = {
  id: string;
  name: string;
};

export type VehicleModel = {
  id: string;
  name: string;
  bodyType: string;
  fuelType: string;
  make: VehicleMake;
};

export type VehicleVariant = {
  id: string;
  name: string;
  metadata?: Record<string, unknown> | null;
};

export type Vehicle = {
  id: string;
  vincarId: string;
  name: string;
  price: number;
  imgUrl?: string | null;
  metadata?: Record<string, unknown> | null;
  model: VehicleModel;
  vehicleVariant?: VehicleVariant | null;
  exteriorColor?: VehicleColor | null;
  interiorColor?: VehicleColor | null;
  images: VehicleImage[];
};

export type GetPublishedVPLVehicleData = {
  getPublishedVPLVehicle: Vehicle | null;
};

export type GetPublishedVPLVehicleVariables = {
  vehicleId: string;
};

export type VehicleListItem = {
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
}

export type GetPublishedVPLVehiclesData = {
  getPublishedVPLVehicles: {
    paginationInfo: {
      currentPageNumber: number
      currentPageSize: number
      hasNextPage: boolean
      totalPageNumber: number
    }
    vehicles: VehicleListItem[]
  }
}

export type GetPublishedVPLVehiclesVariables = {
  input: {
    pageNumber: number
    pageSize: number
  }
}