import { describe, expect, it } from "vitest";
import { filterActivities } from "../src/lib/filterActivities";
import { activities } from "../src/data/activities";

describe("filterActivities", () => {
  it("не показывает занятия дороже бюджета", () => {
    const result = filterActivities(activities, 0);
    expect(result.map((item) => item.id)).toEqual(["1"]);
  });
});
