import { gql, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query ($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

const staticRoutedPage = () => {
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: 2,
    },
  });

  console.log(data);

  return (
    <>
      <div>2번 게시글로 이동이 완료 되었습니다.</div>
      <div>작성자는 : {data?.fetchBoard.writer}</div>
      <div>제목 : {data?.fetchBoard.title}</div>
      <div>내용 : {data?.fetchBoard.contents}</div>
    </>
  );
};

export default staticRoutedPage;
