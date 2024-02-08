import { add, substract, multiply, divide } from "./calculator.js";

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
