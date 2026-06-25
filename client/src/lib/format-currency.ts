export function formatCurrency(value: number | null | undefined): string {
  if (typeof value !== 'number') {
    return '-';
  }

  return `$${new Intl.NumberFormat('en-SG', {
    maximumFractionDigits: 0,
  }).format(value)}`;
}