import analyzeArray from "./analyzeArray.js";

describe("analyzeArray", () => {
  test("Get average, min, max, and length from [1,8,3,4,2,6]", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test("Get average, min, max, and length from [0,0,0]", () => {
    expect(analyzeArray([0, 0, 0])).toEqual({
      average: 0,
      min: 0,
      max: 0,
      length: 3,
    });
  });

  test("Get average, min, max, and length from []", () => {
    expect(analyzeArray([])).toEqual({
      average: null,
      min: null,
      max: null,
      length: 0,
    });
  });
});
