export type Category = "walks" | "games" | "creative";

export interface Activity {
  id: number;
  title: string;
  category: Category;
  durationMinutes: number;
  cost: number;
}
