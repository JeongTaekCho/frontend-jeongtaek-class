import { useRouter } from "next/router";
import { IserviceData } from "./centerDetail.types";

const CenterDetailUi = ({ serviceData }: IserviceData) => {
  const router = useRouter();
  return (
    <>
      {serviceData.map((el: any) => {
        if (el.id === router.query.id) {
          return (
            <>
              <div>작성자 : {el.writer} </div>
              <div>제목 : {el.title}</div>
              <div>내용 : {el.contents}</div>
            </>
          );
        }
      })}
    </>
  );
};

export default CenterDetailUi;
