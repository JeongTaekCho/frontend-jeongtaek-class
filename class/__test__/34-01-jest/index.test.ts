import { testFun } from "../../pages/34-01-jest";

it("테스트 해보기", () => {
  const result = testFun(3, 8);
  expect(result).toBe(11);
});

describe("테스트 그룹", () => {
  it("테스트해보기", () => {
    const result = testFun(8, 16);
    expect(result).toBe(24);
  });
});
