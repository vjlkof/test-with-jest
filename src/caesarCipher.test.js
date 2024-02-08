import caesarCipher from "./caesarCipher.js";

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
