import "../styles/globals.css";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import { ThemeProvider } from "@emotion/react";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  const client = new ApolloClient({
    uri: "http://backend09.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
