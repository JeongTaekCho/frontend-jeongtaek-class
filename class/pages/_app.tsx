import { AppProps } from "next/app";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import ApolloSetting from "../src/components/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/global-styles";

// /////////////////////////////*파이어베이스*///////////////////////////////////////
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLUOzWwNE5nNMa2hARsfN4gaLh-_N9JDo",
  authDomain: "winter-is-comming.firebaseapp.com",
  projectId: "winter-is-comming",
  storageBucket: "winter-is-comming.appspot.com",
  messagingSenderId: "414712216809",
  appId: "1:414712216809:web:53b2f02dd4ec325483c478",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloSetting>
      <>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </ApolloSetting>
  );
}

export default MyApp;
