import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";

interface IApollo {
  children: JSX.Element;
}

const ApolloSetting = (props: IApollo) => {
  const client = new ApolloClient({
    uri: "http://backend09.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

export default ApolloSetting;
