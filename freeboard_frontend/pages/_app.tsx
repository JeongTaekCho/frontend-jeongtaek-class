import "../styles/globals.css";
import { ApolloProvider, InMemoryCache, ApolloClient } from "@apollo/client";
import { css, ThemeProvider, Global } from "@emotion/react";
import theme from "../styles/theme";
import Footer from "../src/component/common/Footer";
import Header from "../src/component/common/Header";
import { AppProps } from "next/app";

const GlobalStyle = css`
  p {
    margin-bottom: 0;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://backend09.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <Header></Header>
        <Component {...pageProps} />
        <Footer></Footer>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
