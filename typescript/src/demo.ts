import { activities } from "./activities.js";
import { formatActivity, getAffordable } from "./utils.js";

const budget = 100;
console.log(`Идеи в пределах ${budget} ₽:`);
for (const activity of getAffordable(activities, budget)) {
  console.log(formatActivity(activity));
}
