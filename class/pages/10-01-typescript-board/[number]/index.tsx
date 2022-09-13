import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
    },
  });

  const goEdit = () => {
    router.push(`/10-01-typescript-board/${router.query.number}/edit`);
  };

  console.log(router);

  return (
    <>
      <div>{router.query.number}번 게시글로 이동이 완료 되었습니다.</div>
      <div>작성자는 : {data?.fetchBoard.writer}</div>
      <div>제목 : {data?.fetchBoard.title}</div>
      <div>내용 : {data?.fetchBoard.contents}</div>
      <button onClick={goEdit}>수정하기</button>
    </>
  );
};

export default staticRoutedPage;
