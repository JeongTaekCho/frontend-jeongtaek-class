import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

interface IChildren {
  children: JSX.Element;
}

const GLOBAL_STATE = new InMemoryCache();

export default function ApolloSetting(props: IChildren) {
  const uploadLink = createUploadLink({
    uri: "http://backend09.codebootcamp.co.kr/graphql",
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
