// 개발자일때 => 네이버(제공자)

import Head from "next/head";

export default function opengraphProviderPage() {
  return (
    <>
      <Head>
        <meta property="og:title" content="중고마켓" />
        <meta
          property="og:description"
          content="깜장이마켓에 오신걸 환영합니다."
        />
        <meta
          property="og:image"
          content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Kfml_R9SXyAxUJ1GoApj1aO2j_oHDjA5-A&usqp=CAU"
        />
      </Head>
      <div>깜장이보러 오신 여러분 환영합니다.</div>
    </>
  );
}
