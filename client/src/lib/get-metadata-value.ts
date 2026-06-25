export function getMetadataStringValue(
  metadata: Record<string, unknown> | null | undefined,
  key: string,
): string | undefined {
  const value = metadata?.[key];

  if (typeof value !== 'string') {
    return undefined;
  }

  return value;
}