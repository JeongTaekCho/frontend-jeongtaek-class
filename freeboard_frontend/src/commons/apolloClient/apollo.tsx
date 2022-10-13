import {
  ApolloProvider,
  InMemoryCache,
  ApolloClient,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenData } from "../../store";

interface IApollo {
  children: JSX.Element;
}

const GLOBAL_STATE = new InMemoryCache();

const ApolloSetting = (props: IApollo) => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenData);

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      setAccessToken(String(localStorage.getItem("accessToken")));
    }
  }, []);

  const uploadLink = createUploadLink({
    uri: "http://backend09.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      // "Content-Type": "application/graphql",
    },
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: GLOBAL_STATE,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

export default ApolloSetting;
