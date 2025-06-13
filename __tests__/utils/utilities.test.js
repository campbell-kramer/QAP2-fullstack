const { getStreak } = require("../../utils/utilities");

describe("getStreak", () => {
  test("returns full streak for all positive moods when list is entirely positive moods", () => {
    const moods = ["Happy", "Excited", "Happy"];
    expect(getStreak(moods)).toBe(3);
  });

  test("returns 0 if most recent mood is negative", () => {
    const moods = ["Sad", "Happy", "Sad"];
    expect(getStreak(moods)).toBe(0);
  });

  test("returns correct streak leading up to first negative mood", () => {
    const moods = ["Happy", "Sad", "Excited", "Happy", "Excited"];
    expect(getStreak(moods)).toBe(3);
  });

  test("returns 0 for array with no positive moods", () => {
    const moods = ["Sad", "Okay", "Stressed"];
    expect(getStreak(moods)).toBe(0);
  });

  test("returns 0 for empty mood array", () => {
    const moods = [];
    expect(getStreak(moods)).toBe(0);
  });

  test("returns 1 if last mood entered is positive", () => {
    const moods = ["Happy"];
    expect(getStreak(moods)).toBe(1);
  });
});
