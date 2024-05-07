import { add } from "./math.js";

function manualTest_add() {
  // kör funktionen som ska testas med lämpliga värden
  // jämför resultatet med det förväntande resultatet
  const expectedResult = 12;
  let actualResult = add(10, 2);
  if (expectedResult === actualResult) {
    console.log("green, (add works)");
  } else {
    console.log("red, (add dosen´t work)");
  }
}
//manualTest_add();

// test, expect, toBe

test("can add 10 and 2", () => {
  const expectedResult = 12;
  const actualResult = add(10, 2);
  expect(actualResult).toBe(expectedResult);
});
