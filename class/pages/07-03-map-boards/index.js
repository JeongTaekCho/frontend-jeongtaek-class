import { gql, useQuery } from "@apollo/client";

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

const staticRoutedPage = () => {
  const { data } = useQuery(FETCH_BOARDS);

  console.log(data?.fetchBoards);

  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        <div>
          <span>NO. {el.number}</span> &nbsp;&nbsp;
          <span>작성자: {el.writer}</span>&nbsp;&nbsp;
          <span>제목: {el.title}</span>&nbsp;&nbsp;
          <span>내용: {el.contents}</span>
        </div>
      ))}
    </>
  );
};

export default staticRoutedPage;
