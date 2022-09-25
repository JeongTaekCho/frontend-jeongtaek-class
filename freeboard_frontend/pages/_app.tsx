import { ThemeProvider, Global } from "@emotion/react";
import theme from "../src/commons/themeStyles/theme";
import { AppProps } from "next/app";
import { GlobalStyles } from "../src/commons/globalStyles";
import ApolloSetting from "../src/commons/apolloClient/apollo";
import Layout from "../src/component/common/layout";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2gysXnP7s0WRefk-WVid2vkwNrp-EJdU",
  authDomain: "taek-service-center.firebaseapp.com",
  projectId: "taek-service-center",
  storageBucket: "taek-service-center.appspot.com",
  messagingSenderId: "557276108109",
  appId: "1:557276108109:web:8229c8718c2ac67f4e5304",
};

// Initialize Firebase
export const fireBaseApp = initializeApp(firebaseConfig);

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
