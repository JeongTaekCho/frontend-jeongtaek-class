import { useMutation, useQuery } from "@apollo/client";
import Head from "next/head";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { userInfo } from "../../store";
import MyPageUi from "./mypage.presenter";
import { BOUGHT_PRODUCT, PICKED_PRODUCT, POINT_CHARGE } from "./mypage.queries";

const MyPage = () => {
  const [userDatas] = useRecoilState(userInfo);

  const [pointCharge] = useMutation(POINT_CHARGE);

  const { data: boughtProductData, refetch: bpRefetch } =
    useQuery(BOUGHT_PRODUCT);
  const { data: pickedProductData, refetch: pPRefetch } = useQuery(
    PICKED_PRODUCT,
    {
      variables: {
        page: 1,
        search: "",
      },
    }
  );

  useEffect(() => {
    void bpRefetch();
    void pPRefetch();
  }, [boughtProductData, pickedProductData]);

  console.log(pickedProductData);
  const { register, handleSubmit } = useForm();

  const onClickPointCharge = (data) => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675"); // Example: imp00000000

    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: `${data.point} 포인트 충전`,
        amount: 100,
        buyer_email: userDatas.fetchUserLoggedIn.email,
        buyer_name: userDatas.fetchUserLoggedIn.name,
        buyer_tel: "010-9774-3591",
      },
      async (rsp) => {
        // callback

        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);
          await pointCharge({
            variables: {
              impUid: rsp.imp_uid,
            },
            update(cache, { data }) {
              cache.modify({
                fields: () => {},
              });
            },
          });
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
        boughtProductData={boughtProductData}
        pickedProductData={pickedProductData}
      />
    </>
  );
};

export default MyPage;
