import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import GraphqlMutationPage, {
  CREATE_BOARD,
} from "../../pages/34-05-jest-unit-test-mocking";
import { MockedProvider } from "@apollo/client/testing";
import "@testing-library/jest-dom";
import { useRouter } from "next/router";

// 가짜 useRouter 만들고 , 가짜 push 넣어놓기
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
const push = jest.fn();
(useRouter as jest.Mock).mockImplementation(() => ({
  push,
}));

// 가짜 뮤테이션 만들기
const mocks = [
  {
    request: {
      query: CREATE_BOARD,
      variables: {
        createBoardInput: {
          writer: "깜장이",
          title: "깜장이는 너무 귀여워",
          contents: "인정?",
          password: "1234",
        },
      },
    },
    result: {
      data: {
        createBoard: {
          _id: "백엔드에서 받은 게시글 아이디",
          writer: "깜장이",
          title: "깜장이는 너무 귀여워",
          contents: "인정?",
        },
      },
    },
  },
];

it("API를 모킹하여 테스트하자!!", async () => {
  render(
    <MockedProvider mocks={mocks}>
      <GraphqlMutationPage />
    </MockedProvider>
  );

  fireEvent.change(screen.getByRole("input-writer"), {
    target: { value: "깜장이" },
  });
  fireEvent.change(screen.getByRole("input-title"), {
    target: { value: "깜장이는 너무 귀여워" },
  });
  fireEvent.change(screen.getByRole("input-contents"), {
    target: { value: "인정?" },
  });

  fireEvent.click(screen.getByRole("submit-btn"));

  await waitFor(() => {
    expect(push).toHaveBeenCalledWith(`/boards/백엔드에서 받은 게시글 아이디`);
  });
});
