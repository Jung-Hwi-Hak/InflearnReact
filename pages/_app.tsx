import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../src/components-example/commons/layout";
import ApolloSetting from "../src/components-example/commons/apollo";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div>
      <div>====여기는 _app.js 컴포넌트 입니다.====</div>
      <ApolloSetting>
        <Layout>
          <Component />
        </Layout>
      </ApolloSetting>
      <div>====여기는 _app.js 컴포넌트 입니다.====</div>
    </div>
  );
}
