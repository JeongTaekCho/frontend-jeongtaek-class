import { ThemeProvider, Global } from "@emotion/react";
import theme from "../src/commons/themeStyles/theme";
import { AppProps } from "next/app";
import { GlobalStyles } from "../src/commons/globalStyles";
import ApolloSetting from "../src/commons/apolloClient/apollo";
import Layout from "../src/component/common/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloSetting>
      <ThemeProvider theme={theme}>
        <Layout>
          <>
            <Global styles={GlobalStyles} />
            <Component {...pageProps} />
          </>
        </Layout>
      </ThemeProvider>
    </ApolloSetting>
  );
}

export default MyApp;
