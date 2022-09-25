import { useRouter } from "next/router";
import CenterListUi from "./centerList.presenter";

const CenterList = () => {
  const router = useRouter();

  const goCenterWrite = async () => {
    await router.push("/service/center/write");
  };

  return <CenterListUi goCenterWrite={goCenterWrite} />;
};

export default CenterList;
