import { gql, useMutation, useQuery } from "@apollo/client";

const CREATE_BOARD = gql`
  mutation {
    createBoard(writer: "123", title: "제목", contents: "콘텐츠 작성") {
      _id
      number
      message
    }
  }
`;

const GraphqlMutationPage = () => {
  const [createBoard] = useMutation(CREATE_BOARD);

  const onClickSubmit = async () => {
    const {
      data: { createBoard },
    } = await createBoard();
    console.log(createBoard);
  };

  const onClickSubmit2 = async () => {
    const result = await readBoard();
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickSubmit}>Graphql - API 요청하기</button>
    </>
  );
};

export default GraphqlMutationPage;
