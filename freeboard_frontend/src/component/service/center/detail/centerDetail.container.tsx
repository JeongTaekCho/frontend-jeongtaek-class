import {
  collection,
  DocumentData,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { listAll, ref } from "firebase/storage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fireBaseApp, storage } from "../../../../commons/libraries/firebase";
import CenterDetailUi from "./centerDetail.presenter";

const CenterDetail = () => {
  const [serviceData, setServiceData] = useState<DocumentData>([]);
  const [fileList, setFileList] = useState([]);

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

  useEffect(() => {
    const getFile = async () => {
      const listRef = ref(storage, "gs://taek-service-center.appspot.com");
      const result = await listAll(listRef);
      console.log(result);
    };
    void getFile();
  }, [fileList]);

  const goDetailList = () => {
    void router.push("/service/center");
  };

  return (
    <CenterDetailUi serviceData={serviceData} goDetailList={goDetailList} />
  );
};

export default CenterDetail;
