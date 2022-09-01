import { gql, useMutation, useQuery } from "@apollo/client";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $content: String) {
    #타임적는곳
    createBoard(writer: $writer, title: $title, contents: $content) {
      #실제 우리가 전달할 변수 적는 곳
      _id
      number
      message
    }
  }
`;

const GraphqlMutationArgsPage = () => {
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        // variables 이게 달러 역할을 함.
        writer: "훈이",
        title: "안냐세요",
        content: "반가워",
      },
    });
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickSubmit}>Graphql - API 요청하기</button>
    </>
  );
};

export default GraphqlMutationArgsPage;
