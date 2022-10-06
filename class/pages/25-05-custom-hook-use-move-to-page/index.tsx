// import { useRouter } from "next/router";
import { useMoveToPage } from "../../src/components/commons/hooks/useMoveToPage";

export default function CustomHooksUseMoveToPage() {
  // const router = useRouter();
  const { onClickMoveToPage } = useMoveToPage();

  // const onClickMoveToPage = (path: string) => () => {
  //   void router.push(path);
  // };

  return (
    <>
      <button onClick={onClickMoveToPage("/boards")}>게시판으로 이동</button>
      <button onClick={onClickMoveToPage("/products")}>마켓으로 이동</button>
      <button onClick={onClickMoveToPage("mypage")}> 마이페이지로 이동</button>
    </>
  );
}
