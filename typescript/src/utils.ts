import type { Activity } from "./models.js";

export function getAffordable(items: readonly Activity[], budget: number): Activity[] {
  return items.filter((activity) => activity.cost <= budget);
}

export function formatActivity(activity: Activity): string {
  return `${activity.title} — ${activity.durationMinutes} минут, ${activity.cost} ₽`;
}
