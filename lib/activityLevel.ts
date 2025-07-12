export function getActivityLevel(hours: number): number {
  if (hours > 35) return 3      // high
  if (hours > 15) return 2      // medium
  if (hours > 0) return 1       // low
  return 0                      // none
} 