import { gql, useQuery, useMutation } from "@apollo/client";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

const staticRoutedPage = () => {
  const { data } = useQuery(FETCH_BOARDS);

  const [deleteBoard] = useMutation(DELETE_BOARD);

  console.log(data?.fetchBoards);

  const onClickDelete = async (event) => {
    await deleteBoard({
      variables: {
        number: Number(event.target.id),
      },
      refetchQueries: [
        {
          query: FETCH_BOARDS,
        },
      ],
    });
  };

  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <div key={index}>
          <input type="checkbox"></input>
          <span>NO. {el.number}</span> &nbsp;&nbsp;
          <span>작성자: {el.writer}</span>&nbsp;&nbsp;
          <span>제목: {el.title}</span>&nbsp;&nbsp;
          <span>내용: {el.contents}</span>
          <button id={el.number} onClick={onClickDelete}>
            삭제하기
          </button>
        </div>
      ))}
    </>
  );
};

export default staticRoutedPage;
