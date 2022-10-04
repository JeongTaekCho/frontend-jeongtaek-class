import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../store";

interface IChildren {
  children: JSX.Element;
}

const GLOBAL_STATE = new InMemoryCache();

export default function ApolloSetting(props: IChildren) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // 1, 프리렌더링 예제 - prosess.browser 방법
  // if (process.browser) {
  //   // 브라우저일때
  //   console.log("지금은 브라우저야");
  // } else {
  //   // 브라우저가 아닐때
  //   console.log("지금은 프론트엔드 서버얌");
  // }

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setAccessToken(token);
  //   }
  // }, []);

  // 2. 프리렌더링 예제 - typeof window 방법

  // if (typeof window !== "undefined") {
  //   // 브라우저일때
  //   console.log("지금은 브라우저야");
  // } else {
  //   // 브라우저가 아닐때
  //   console.log("지금은 프론트엔드 서버얌");
  // }

  // 3. 프리렌더링 무시 - useEffect 방법 - 브라우저에서만 실행됨.
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAccessToken(token);
    }
  }, [accessToken]);

  const uploadLink = createUploadLink({
    uri: "http://backend09.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    // cache: new InMemoryCache(), // 나중에 할거
    cache: GLOBAL_STATE, // 페이지전화(리렌터링)되어도 캐시 유지
  });

  // prettier-ignore
  return (
      <ApolloProvider client={client}>
            {props.children}
      </ApolloProvider>
  )
}
