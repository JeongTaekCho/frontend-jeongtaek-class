import { fireEvent, render, screen } from "@testing-library/react";
import CounterStatePage from "../../pages/34-04-jest-unit-test-event";
import "@testing-library/jest-dom";

it("버튼을 눌렀을 때 제대로 동작하는지 테스트해보자", () => {
  render(<CounterStatePage />);

  fireEvent.click(screen.getByRole("count-button"));

  expect(screen.getByRole("count")).toHaveTextContent("1");
});
