import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";



interface IChildren {
  children: JSX.Element;
}

export default function ApolloSetting(props: IChildren) {
  const client = new ApolloClient({
    uri: "http://backend09.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // 나중에 할거
  });

  // prettier-ignore
  return (
      <ApolloProvider client={client}>
            {props.children}
      </ApolloProvider>
  )
}
