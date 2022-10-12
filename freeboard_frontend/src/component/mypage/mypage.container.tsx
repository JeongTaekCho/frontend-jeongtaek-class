import { useMutation, useQuery } from "@apollo/client";
import Head from "next/head";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { userInfo } from "../../store";
import MyPageUi from "./mypage.presenter";
import { POINT_CHARGE } from "./mypage.queries";
import { v4 as uuidV4 } from "uuid";

const MyPage = () => {
  const [userDatas] = useRecoilState(userInfo);

  const [pointCharge] = useMutation(POINT_CHARGE);

  const { register, handleSubmit } = useForm();

  console.log(userDatas);

  const onClickPointCharge = (data) => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp20064436"); // Example: imp00000000

    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: `${data.point} 포인트 충전`,
        amount: data.point,
        buyer_email: userDatas.fetchUserLoggedIn.email,
        buyer_name: userDatas.fetchUserLoggedIn.name,
        buyer_tel: "010-9774-3591",
      },
      async (rsp) => {
        // callback
        console.log(rsp);
        console.log(rsp.imp_uid);
        if (rsp.success) {
          // 결제 성공 시 로직,
          const result = await pointCharge({
            variables: {
              impUid: rsp.imp_uid,
            },
          });
          console.log(result);
        } else {
          // 결제 실패 시 로직,
          alert("충전이 실패했습니다. 다시 시도해주세요.");
        }
      }
    );
  };

  return (
    <>
      <Head>
        {/* <!-- jQuery --> */}
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        {/* <!-- iamport.payment.js --> */}
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <MyPageUi
        register={register}
        handleSubmit={handleSubmit}
        onClickPointCharge={onClickPointCharge}
        userDatas={userDatas}
      />
    </>
  );
};

export default MyPage;
