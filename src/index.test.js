import {
  capitalize,
  reversed,
  add,
  substract,
  multiply,
  divide,
  caesarCipher,
  analyzeArray,
} from "./index.js";

test("capitalize guardian controller", () => {
  expect(capitalize("guardian controller")).toBe("Guardian controller");
});

test("reverse the string force is with you", () => {
  expect(reversed("force is with you")).toBe("you with is force");
});

describe("calculator", () => {
  test("sum 2 + 3", () => {
    expect(add(2, 3)).toEqual(5);
  });

  test("sum 25 - 3", () => {
    expect(substract(25, 3)).toEqual(22);
  });

  test("Multiply 2 * 3", () => {
    expect(multiply(2, 3)).toEqual(6);
  });

  test("Divide 6/2", () => {
    expect(divide(6, 2)).toBeCloseTo(3);
  });
});

describe("caesarCipher", () => {
  test("Shift 1 plan text", () => {
    expect(caesarCipher("plan text", 1)).toBe("qmbo ufyu");
  });

  test("Shift 0 plan text", () => {
    expect(caesarCipher("plan text", 0)).toBe("plan text");
  });

  test("Shift -1 plan text", () => {
    expect(caesarCipher("plan text", -1)).toBe("okzm sdws");
  });

  test("Shift 1 with z in the string", () => {
    expect(caesarCipher("zod is great", 1)).toBe("ape jt hsfbu");
  });

  test("Shift 1 with punctuation", () => {
    expect(caesarCipher("zod is. great.", 1)).toBe("ape jt. hsfbu.");
  });

  test("Shift -51 zod is great", () => {
    expect(caesarCipher("zod is great", -51)).toBe("ape jt hsfbu");
  });
});

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
