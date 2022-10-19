// 개발자일때 => 네이버(제공자)

import { gql, useQuery } from "@apollo/client";
import { GraphQLClient } from "graphql-request";
import Head from "next/head";

const FETCH_USEDITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      images
    }
  }
`;

export default function opengraphProviderPage(props) {
  const { data: productDatas } = useQuery(FETCH_USEDITEM, {
    variables: {
      useditemId: "63469b786cf469002995cae7",
    },
  });

  return (
    <>
      <Head>
        <meta property="og:title" content={props.qqq.name} />
        <meta property="og:description" content={props.qqq.remarks} />
        <meta property="og:image" content={props.qqq.images?.[0]} />
      </Head>
      <div>깜장이보러 오신 여러분 환영합니다.</div>
    </>
  );
}

// getServerSideProps는 존재하는 단어이므로 변경 불가능
// 여기는 서버에서만 실행됨. (webpack 프론트엔드 서버프로그램)
export const getServerSideProps = async () => {
  console.log("여기는 서버입니다.");

  // 1. 여기서 API 요청
  const graphQLClient = new GraphQLClient(
    "https://backend09.codebootcamp.co.kr/graphql",
    {
      credentials: "include",
    }
  );
  const result = await graphQLClient.request(FETCH_USEDITEM, {
    useditemId: "63469b786cf469002995cae7",
  });
  // 2. 받은 결과를 return

  return {
    props: {
      qqq: {
        name: result.fetchUseditem.name,
        remarks: result.fetchUseditem.remarks,
        images: result.fetchUseditem.images,
      },
    },
  };
};
