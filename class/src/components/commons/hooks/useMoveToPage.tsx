import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitesPageState } from "../../../store";

export function useMoveToPage() {
  const router = useRouter();
  const [visitesPage, setVisitesPage] = useRecoilState(visitesPageState);

  const onClickMoveToPage = (path: string) => () => {
    setVisitesPage(path);
    void router.push(path);
  };

  return {
    onClickMoveToPage,
    visitesPage,
  };
}
