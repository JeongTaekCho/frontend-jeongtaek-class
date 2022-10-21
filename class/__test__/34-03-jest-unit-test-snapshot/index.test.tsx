import { render } from "@testing-library/react";
import JestUnitTestPage from "../../pages/34-03-jest-unit-test-snapshot";

it("기존 사진이랑 바뀐게 없는지 비교해보자 - 스냅샷 테스트", () => {
  const result = render(<JestUnitTestPage />);
  expect(result.container).toMatchSnapshot();
});
