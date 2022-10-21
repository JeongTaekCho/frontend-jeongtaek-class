import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    # 변수의 타입 적는 곳
    createBoard(createBoardInput: $createBoardInput) {
      # 실제 우리가 전달할 변수 적는 곳
      _id
      writer
      title
      contents
    }
  }
`;

export default function GraphqlMutationPage() {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [나의함수] = useMutation(CREATE_BOARD);

  const router = useRouter();

  const onClickSubmit = async () => {
    // const writer = "qqq" // 이 함수에 있으면 현재 스코프
    const result = await 나의함수({
      variables: {
        createBoardInput: {
          // variables 이게 $ 역할을 해줌
          writer: writer, // 이 함수에 없으면 스코프 체인을 통해서 위 함수에서 찾음
          title: title,
          contents: contents,
          password: "1234",
        },
      },
    });
    console.log(result);
    //     alert(result.data.createBoard.message);
    router.push(`/boards/${result.data.createBoard._id}`);
  };

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => {
    setWriter(event.target.value);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  return (
    <>
      작성자:{" "}
      <input role="input-writer" type="text" onChange={onChangeWriter} />
      <br />
      제목: <input role="input-title" type="text" onChange={onChangeTitle} />
      <br />
      내용:{" "}
      <input role="input-contents" type="text" onChange={onChangeContents} />
      <br />
      <button role="submit-btn" onClick={onClickSubmit}>
        GRAPHQL-API(동기) 요청하기
      </button>
    </>
  );
}
