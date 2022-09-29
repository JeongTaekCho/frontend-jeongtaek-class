import { useEffect } from "react";
import { useRecoilState } from "recoil";
import BoardWrite from "../../src/components/units/22-global-state/boardWrite.container";
import { isEditState } from "../../src/store";

const GlobalStatePage = () => {
  useEffect(() => {
    setIsEdit(false);
  }, []);
  const [, setIsEdit] = useRecoilState(isEditState);

  return <BoardWrite />;
};
export default GlobalStatePage;
