export function formatNumber(value: number): string {
  return value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
