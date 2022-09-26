import { useRouter } from "next/router";

const CenterDetailUi = ({ serviceData }) => {
  const router = useRouter();
  return (
    <>
      {serviceData.map((el) => {
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
