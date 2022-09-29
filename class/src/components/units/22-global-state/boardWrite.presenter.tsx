import { useRecoilState } from "recoil";
import { isEditState } from "../../../store";

const TestGlobalUi = () => {
  const [isEdit] = useRecoilState(isEditState);
  return <>{isEdit ? "등록하기" : "수정하기"}</>;
};

export default TestGlobalUi;
