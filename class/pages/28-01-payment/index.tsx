import Head from "next/head";

export default function PayMentPage() {
  const onClickPayment = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp20064436"); // Example: imp00000000

    IMP.request_pay(
      {
        // param
        pg: "nice",
        pay_method: "card",
        //   merchant_uid: "ORD20180131-0000011",
        name: "깜장이 인형",
        amount: 200,
        buyer_email: "cjt3591@gmail.com",
        buyer_name: "조정택",
        buyer_tel: "010-9774-3591",
        buyer_addr: "서울특별시 성동구 성수동",
        buyer_postcode: "12345",
        m_redirect_url: "http://localhost:3000/28-01-payment",
      },
      (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          console.log(rsp);

          // const paymentDate = new Date(); 프론트엔드에서 시간을 만드는 것은 안됨!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

          // 백엔드에 결제관련 데이터 넘겨주기, 뮤테이션 실행..

          //     createPointTransactionOfLoading
        } else {
          // 결제 실패 시 로직,
          alert("결제에 실패했습니다. 다시 시도해주세요.");
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
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
}
