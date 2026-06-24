import { DataSource, In } from 'typeorm';

import { VehicleImage } from '../entities/vehicle-image.entity.js';
import { vehicleMetadataSeedData } from './data/vehicle-metadata.seed-data.js';
import { vehicleSeedData } from './data/vehicle.seed-data.js';

function getMetadataImages(
  metadata: Record<string, unknown> | null,
): string[] {
  const images = metadata?.images;

  if (!Array.isArray(images)) {
    return [];
  }

  return images.filter(
    (image): image is string =>
      typeof image === 'string' && image.trim().length > 0,
  );
}

function uniqueUrls(urls: string[]): string[] {
  const seen = new Set<string>();

  return urls.filter((url) => {
    if (seen.has(url)) {
      return false;
    }

    seen.add(url);
    return true;
  });
}

export async function seedVehicleImages(dataSource: DataSource) {
  const vehicleIds = vehicleSeedData.map((vehicle) => vehicle.id);

  const metadataByVehicleId = new Map(
    vehicleMetadataSeedData.map((item) => [item.vehicleId, item]),
  );

  const vehicleImageRows = vehicleSeedData.flatMap((vehicle) => {
    const vehicleMetadata =
      metadataByVehicleId.get(vehicle.id)?.metadata ?? null;

    const metadataImages = getMetadataImages(vehicleMetadata);

    const imageUrls = uniqueUrls([
      ...(vehicle.imgUrl ? [vehicle.imgUrl] : []),
      ...metadataImages,
    ]);

    return imageUrls.map((url, index) => ({
      vehicleId: vehicle.id,
      url,
      sortOrder: index,
      isPrimary: index === 0,
    }));
  });

  await dataSource.transaction(async (manager) => {
    await manager.delete(VehicleImage, {
      vehicleId: In(vehicleIds),
    });

    if (vehicleImageRows.length > 0) {
      await manager.insert(VehicleImage, vehicleImageRows);
    }
  });

  console.log(
    `Seeded vehicle images. Total vehicle images: ${vehicleImageRows.length}`,
  );
}