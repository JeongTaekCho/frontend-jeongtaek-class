import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query ($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

const staticRoutedPage = () => {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  // const goEdit = () => {
  //   router.push(`/09-01-board/${router.query.number}/edit`);
  // };

  console.log(router);

  return (
    <>
      {/* <div>{router.query.number}번 게시글로 이동이 완료 되었습니다.</div> */}
      <div>작성자는 : {data?.fetchBoard.writer}</div>
      <div>제목 : {data?.fetchBoard.title}</div>
      <div>내용 : {data?.fetchBoard.contents}</div>
      {/* <button onClick={goEdit}>수정하기</button> */}
    </>
  );
};

export default staticRoutedPage;
