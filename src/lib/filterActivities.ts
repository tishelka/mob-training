import type { Activity } from "../types/activity";

export function filterActivities(items: readonly Activity[], maxCost: number): Activity[] {
  return items.filter((item) => item.cost <= maxCost);
}
