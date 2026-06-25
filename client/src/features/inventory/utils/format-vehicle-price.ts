export function formatVehiclePrice(price: number | null | undefined) {
  if (price == null) {
    return 'Price on request';
  }

  return new Intl.NumberFormat('en-SG', {
    style: 'currency',
    currency: 'SGD',
    maximumFractionDigits: 0,
  }).format(price);
}