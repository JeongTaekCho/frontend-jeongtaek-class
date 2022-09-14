import "../styles/globals.css";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import { ThemeProvider } from "@emotion/react";
import theme from "../styles/theme";
import Footer from "../src/component/common/Footer";
import Header from "../src/component/common/Header";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://backend09.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Header></Header>
        <Component {...pageProps} />
        <Footer></Footer>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
