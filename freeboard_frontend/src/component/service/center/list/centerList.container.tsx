import { useRouter } from "next/router";
import CenterListUi from "./centerList.presenter";
import {
  collection,
  DocumentData,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { fireBaseApp } from "../../../../commons/libraries/firebase";

const CenterList = () => {
  const router = useRouter();

  const [data, setData] = useState<DocumentData>([]);

  useEffect(() => {
    const getCenterData = async () => {
      const serviceCetner = collection(
        getFirestore(fireBaseApp),
        "service-center"
      );
      const result = await getDocs(serviceCetner);
      const getServiceData = result.docs.map((el) => el.data());
      setData(getServiceData);
    };
    void getCenterData();
  }, []);

  console.log(data);

  const goCenterWrite = async () => {
    await router.push("/service/center/write");
  };

  return <CenterListUi goCenterWrite={goCenterWrite} data={data} />;
};

export default CenterList;
