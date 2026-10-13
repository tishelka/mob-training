export type ActivityCategory = "walks" | "games" | "creative";

export interface Activity {
  id: string;
  title: string;
  description: string;
  category: ActivityCategory;
  durationMinutes: number;
  cost: number;
}
