import { describe, expect, it } from "vitest";
import { activities } from "../src/activities.js";
import { getAffordable } from "../src/utils.js";

describe("getAffordable", () => {
  it("оставляет идеи не дороже бюджета", () => {
    expect(getAffordable(activities, 0).map((item) => item.id)).toEqual([1]);
  });
});
