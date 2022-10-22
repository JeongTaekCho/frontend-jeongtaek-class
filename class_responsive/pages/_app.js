import Layout from "../src/components/layout";
import "../styles/globals.css";
import { RecoilRoot } from "recoil";
import { Global } from "@emotion/react";
import { Globalstyles } from "../src/styles/globalStyles";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Global styles={Globalstyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
