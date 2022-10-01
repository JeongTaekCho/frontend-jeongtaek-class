import {
  collection,
  DocumentData,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fireBaseApp } from "../../../../commons/libraries/firebase";
import CenterDetailUi from "./centerDetail.presenter";

const CenterDetail = () => {
  const [serviceData, setServiceData] = useState<DocumentData>([]);

  const router = useRouter();

  useEffect(() => {
    const getCenterData = async () => {
      const serviceCenter = collection(
        getFirestore(fireBaseApp),
        "service-center"
      );
      const result = await getDocs(serviceCenter);
      const getServiceData = result.docs.map((el) => el.data());
      setServiceData(getServiceData);
    };
    void getCenterData();
  }, []);

  const goDetailList = () => {
    void router.push("/service/center");
  };

  return (
    <CenterDetailUi serviceData={serviceData} goDetailList={goDetailList} />
  );
};

export default CenterDetail;
