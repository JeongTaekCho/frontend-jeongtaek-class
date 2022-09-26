import {
  ApolloProvider,
  InMemoryCache,
  ApolloClient,
  ApolloLink,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

interface IApollo {
  children: JSX.Element;
}

const ApolloSetting = (props: IApollo) => {
  const uploadLink = createUploadLink({
    uri: "http://backend09.codebootcamp.co.kr/graphql",
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

export default ApolloSetting;
