import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
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

const GraphqlMutationInputPage = () => {
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
  };
  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const onChangeContent = (event) => {
    setContent(event.target.value);
  };

  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    try {
      const result = await createBoard({
        variables: {
          // variables 이게 달러 역할을 함.
          writer: writer,
          title: title,
          content: content,
        },
      });

      console.log(result.data.createBoard.number);
      router.push(
        `/05-10-dynamic-routed-board-mutation/${result.data.createBoard.number}`
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      작성자 : <input type="text" onChange={onChangeWriter} /> <br />
      제목 : <input type="text" onChange={onChangeTitle} />
      <br />
      내용 : <input type="text" onChange={onChangeContent} /> <br />
      <button onClick={onClickSubmit}>Graphql - API 요청하기</button>
    </>
  );
};

export default GraphqlMutationInputPage;
