import { gql, useMutation } from "@apollo/client";
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
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    content: "",
  });

  const onChangeInputs = (event) => {
    setInputs({
      ...inputs,
      [event.target.id]: event.target.value,
    });
  };

  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const result = await createBoard({
      variables: {
        // variables 이게 달러 역할을 함.
        writer: inputs.writer,
        title: inputs.title,
        content: inputs.content,
      },
    });
    console.log(result);
  };

  return (
    <>
      작성자 : <input id="writer" type="text" onChange={onChangeInputs} />{" "}
      <br />
      제목 : <input id="title" type="text" onChange={onChangeInputs} />
      <br />
      내용 : <input id="contents" type="text" onChange={onChangeInputs} />{" "}
      <br />
      <button onClick={onClickSubmit}>Graphql - API 요청하기</button>
    </>
  );
};

export default GraphqlMutationInputPage;
