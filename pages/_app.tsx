// import "../styles/globals.css";
import type { AppProps } from "next/app";
// import Layout from "../src/components-example/commons/layout";
import ApolloSetting from "../src/components-example/commons/apollo";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div>
      <RecoilRoot>
        <ApolloSetting>
          <>
            <Global styles={globalStyles} />
            {/* <Layout> */}
            <Component />
            {/* </Layout> */}
          </>
        </ApolloSetting>
      </RecoilRoot>
    </div>
  );
}
