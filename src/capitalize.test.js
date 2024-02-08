import capitalize from "./capitalize.js";

test("capitalize guardian controller", () => {
  expect(capitalize("guardian controller")).toBe("Guardian controller");
});
