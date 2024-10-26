import attack from "./attack";

test("should return damage sentence when called correctly", () => {
  const result = attack("Smelly Ogre", 21);
  expect(result).toBe("Smelly Ogre dealt 21 damage!");
  expect(result).toMatch(/^Smelly Ogre(.*)21/);
  expect(result).toMatchInlineSnapshot(`"Smelly Ogre dealt 21 damage!"`);
});
