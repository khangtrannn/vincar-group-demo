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