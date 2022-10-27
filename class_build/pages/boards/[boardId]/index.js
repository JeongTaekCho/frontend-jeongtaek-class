import { useRouter } from "next/router";

export default function BoardPage() {
  const router = useRouter();

  return (
    <div>
      안녕하세요 게시판 입니다. 동적페이지에요!
      <br /> 게시글 아이디 : {router.query.boardId}
    </div>
  );
}

export const getServerSideProps = () => {
  // 만약 서버사이드렌더링을 한다면?? => out 폴더로 생성 불가
};
