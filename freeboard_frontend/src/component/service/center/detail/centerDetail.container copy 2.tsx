import {
  collection,
  DocumentData,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { fireBaseApp } from "../../../../commons/libraries/firebase";
import CenterDetailUi from "./centerDetail.presenter";

const CenterDetail = () => {
  const [serviceData, setServiceData] = useState<DocumentData>([]);

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

  console.log(serviceData);

  return <CenterDetailUi serviceData={serviceData} />;
};

export default CenterDetail;
